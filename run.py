#!/usr/bin/env python3

import os
import sys
import argparse
import subprocess
import platform
import signal

# Set constants
WEBGLITCH_PATH = '/Users/matthew/Documents/msc/final_proj/WebGlitch/'
WEBGLITCH_RUNNER_PATH = '/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/'
DENO_PATH = '/Users/matthew/Documents/msc/final_proj/deno/target/x86_64-unknown-linux-gnu/debug/deno'
CHROME_PATH = "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
FIREFOX_PATH = "/Applications/Firefox Nightly.app/Contents/MacOS/firefox"
MACOS_INTERCEPTORS = "DYLD_INSERT_LIBRARIES=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/16/lib/darwin/libclang_rt.asan_osx_dynamic.dylib"
LINUX_INTERCEPTORS = 'LD_PRELOAD=/usr/lib/gcc/x86_64-linux-gnu/11/libasan.so'

# DON'T CHANGE THESE
REPORTS_PATH = WEBGLITCH_RUNNER_PATH + 'reports/'
HEADER_PATH = WEBGLITCH_RUNNER_PATH + 'headers/'
CONCATENATED_NAME = WEBGLITCH_RUNNER_PATH + 'concatenated.js'
PUPPETEER_SCRIPT_PATH= WEBGLITCH_PATH + "rsrcs/js/puppeteer.js"
SERVER_DIRECTORY = WEBGLITCH_PATH + 'rsrcs/html'

SUPPORTED_BROWSERS = ['chrome', 'firefox']
SUPPORTED_RUNTIMES = ['dawn', 'wgpu']
PORT = 8080
HTTP_SERVER_CMD = f'npx http-server {SERVER_DIRECTORY} -p {PORT}'

# Detect OS type
OSTYPE = platform.system().lower()

server_process = None 

if 'darwin' in OSTYPE:
    OS_DIR = 'macos'
    INTERCEPTORS = MACOS_INTERCEPTORS
    TIMEOUT_CMD = 'gtimeout'
    WGPU_BACKEND = 'DENO_WEBGPU_BACKEND=metal'
    os.environ['MTL_DEBUG_LAYER'] = '1'
elif 'windows' in OSTYPE:
    OS_DIR = 'windows'
    WGPU_BACKEND = 'DENO_WEBGPU_BACKEND=dx12'
    TIMEOUT_CMD=""
    INTERCEPTORS=""
else:
    OS_DIR = 'linux'
    INTERCEPTORS = LINUX_INTERCEPTORS
    TIMEOUT_CMD = 'timeout'
    WGPU_BACKEND = 'DENO_WEBGPU_BACKEND=vulkan'
    os.environ['VK_INSTANCE_LAYERS'] = 'VK_LAYER_KHRONOS_validation'

# Set common environment variables
os.environ['DAWN_DEBUG_BREAK_ON_ERROR'] = '1'

# Function to search for specific lines in a file
def search_errors_enabled_disabled(input_file, output_file):
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        for line in infile:
            if 'Errors enabled' in line or 'Errors disabled' in line:
                outfile.write(line)

# def signal_handler(sig, frame):
#     if server_process is not None and server_process.poll() is None:
#         server_process.terminate()
#     sys.exit(0)

# signal.signal(signal.SIGINT, signal_handler)

def main():
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description='Process WebGPU programs.')
    parser.add_argument('-b', '--backend', required=True, choices=['all', 'dawn', 'wgpu', 'chrome', 'firefox', 'all_runtimes', 'all_browsers'], help='WebGPU implementation to run on')
    parser.add_argument('-o', '--output', required=True, help='WebGPU program to run')
    args = parser.parse_args()

    backend = args.backend
    FILEPATH = args.output

    # Check if FILEPATH exists
    if not os.path.isfile(FILEPATH):
        print(f"Error: WebGPU program '{FILEPATH}' does not exist.")
        sys.exit(1)

    PLATFORM_MAPPINGS = {
        'dawn': {
            'header_path': 'dawnHeader.js',
            'cmd': [TIMEOUT_CMD, '300s', 'env', INTERCEPTORS, 'node', CONCATENATED_NAME]
        },
        'wgpu': {
            'header_path': 'denoHeader.js',
            'cmd': [TIMEOUT_CMD, '300s', 'env', WGPU_BACKEND, DENO_PATH, 'run', '--allow-read', '--unstable-webgpu', '--allow-write', CONCATENATED_NAME]
        },
        'chrome': {
            'cmd': ['node', PUPPETEER_SCRIPT_PATH, FILEPATH],
            'path': CHROME_PATH,
            'browser_type': "chrome"

        },
        'firefox': {
            'cmd': ['node', PUPPETEER_SCRIPT_PATH, FILEPATH],
            'path': FIREFOX_PATH,
            'browser_type': "firefox"
        }
    }
    # Create reports directories if they do not exist
    for platform in (SUPPORTED_BROWSERS + SUPPORTED_RUNTIMES):
        os.makedirs(os.path.join(REPORTS_PATH, platform, OS_DIR), exist_ok=True)

    # Extract filename and file number
    FILENAME = os.path.basename(FILEPATH)
    FILENUMBER = os.path.splitext(FILENAME)[0]

    if backend == 'all':
        platforms_to_run = SUPPORTED_BROWSERS + SUPPORTED_RUNTIMES
    elif backend == 'all_browsers':
        platforms_to_run = SUPPORTED_BROWSERS
    elif backend == 'all_runtimes':
        platforms_to_run = SUPPORTED_RUNTIMES
    elif backend in (SUPPORTED_BROWSERS + SUPPORTED_RUNTIMES):
        platforms_to_run = [backend]
    else:
        print(f'Unsupported backend: {backend}')
        sys.exit(1)


    # if any(platform in SUPPORTED_BROWSERS for platform in platforms_to_run):
    #     try: 
    #         if 'windows' in OSTYPE:
    #             server_process = subprocess.Popen(['cmd', '/c', HTTP_SERVER_CMD], shell=True)
    #         else:
    #             server_process = subprocess.Popen(HTTP_SERVER_CMD, shell=True, executable='/bin/bash')
    #     except subprocess.CalledProcessError as e:
    #         print(f"Failed to start http-server on port {port}: {e}")
    #         print("Continuing regardless...")

    try:
        for platform in platforms_to_run:
            if platform in SUPPORTED_RUNTIMES:
                with open(CONCATENATED_NAME, 'w') as outfile:
                    with open(os.path.join(HEADER_PATH, PLATFORM_MAPPINGS[platform]['header_path']), 'r') as headerfile:
                        outfile.write(headerfile.read())
                    with open(FILEPATH, 'r') as infile:
                        outfile.write(infile.read())
            
            if platform in SUPPORTED_BROWSERS:
                os.environ['EXECUTABLE_PATH'] = PLATFORM_MAPPINGS[platform]['path']
                os.environ['BROWSER'] = PLATFORM_MAPPINGS[platform]['browser_type']
            else: # remove browser-specific code
                current_dir = os.path.dirname(os.path.abspath(__file__))
                comment_out_script_path = current_dir + '/commentOut.py'
                subprocess.run(['python3', comment_out_script_path, CONCATENATED_NAME], check=True)

            print("Running using " + platform + "...")

            LOG_FILE_NAME = os.path.join(REPORTS_PATH, platform, OS_DIR, f'{FILENUMBER}.log')
            search_errors_enabled_disabled(FILEPATH, LOG_FILE_NAME)

            # Build the command with environment variables inline

            with open(LOG_FILE_NAME, 'a') as logfile:
                process = subprocess.run(PLATFORM_MAPPINGS[platform]['cmd'], stdout=logfile, stderr=subprocess.STDOUT, timeout=300)
                exit_code = process.returncode
                logfile.write(f"Exit code: {exit_code}\n")

            # Delete the concatenated file
            if platform in SUPPORTED_RUNTIMES:
                os.remove(CONCATENATED_NAME)

            os.environ.pop('EXECUTABLE_PATH', None)
            os.environ.pop('BROWSER', None)
        
    except Exception as e:
        print(f"Error: {e}")
    # finally:
    #     if server_process is not None and server_process.poll() is None:
    #         print("Terminating http-server...")
    #         server_process.terminate()

if __name__ == "__main__":
    main()