import os
import platform
import subprocess

# Set constants
REPORTS_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/reports/"
HEADER_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/headers/"
TEMPLATE_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchFiles/template.js"
# Initialize environment variables based on the operating system
if platform.system() == "Darwin":  # macOS
    OS_DIR = "macos"
    INTERCEPTORS = "DYLD_INSERT_LIBRARIES=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/16/lib/darwin/libclang_rt.asan_osx_dynamic.dylib"
    TIMEOUT_CMD = "gtimeout"
    WGPU_BACKEND = "DENO_WEBGPU_BACKEND=metal"
    DENO_PATH = "/Users/matthew/Documents/msc/final_proj/deno/target/aarch64-apple-darwin/debug/deno"
    os.environ['MTL_DEBUG_LAYER'] = '1'
else:  # Linux
    OS_DIR = "linux"
    INTERCEPTORS = "LD_PRELOAD=/usr/lib/gcc/x86_64-linux-gnu/11/libasan.so"
    TIMEOUT_CMD = "timeout"
    WGPU_BACKEND = "DENO_WEBGPU_BACKEND=vulkan"
    DENO_PATH = "/Users/matthew/Documents/msc/final_proj/deno/target/x86_64-unknown-linux-gnu/debug/deno"
    os.environ['VK_INSTANCE_LAYERS'] = 'VK_LAYER_KHRONOS_validation'

# Ensure reports directory exists
os.makedirs(f"{REPORTS_PATH}shaders/{OS_DIR}/", exist_ok=True)

# Main loop to run 2000 times
for i in range(21, 2001):
    print(f"Running file {i}")
    log_file_name = f"{REPORTS_PATH}shaders/{OS_DIR}/{i}.log"
    shader_file = f"{i}.wgsl"
    
    # Set the shader file as an environment variable
    os.environ['SHADER_FILE'] = shader_file
    
    # Prepare the command to run the node script
    command = f"env {INTERCEPTORS} node {TEMPLATE_PATH}"
    
    # Run the command and log the output
    with open(log_file_name, 'w') as log_file:
        try:
            subprocess.run(command, shell=True, stdout=log_file, stderr=subprocess.STDOUT, timeout=300)
        except subprocess.CalledProcessError as e:
            print(f"Error running file {i}: {e}")
        except subprocess.TimeoutExpired:
            log_file.write("Timeout")

