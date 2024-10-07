#!/bin/bash

# Ensure script exits on error
# NEED DIFFERENCES ACCORIDING TO MACOS AND LINUX 

# Set constants
REPORTS_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/reports/"
HEADER_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/headers/"
TEMPLATE_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchFiles/template.js"
# CONCATENATED_NAME="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/concatenated.js"
# CHROME_PATH="/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
# FIREFOX_PATH="/Applications/Firefox Nightly.app/Contents/MacOS/firefox"
# PUPPETEER_SCRIPT_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/js/puppeteer.js"
export DAWN_DEBUG_BREAK_ON_ERROR=1

backend=""  # Initialize the variable to store the backend option
FILEPATH=""

# while getopts "b:o:" opt; do
#   case $opt in
#     b)
#       backend="$OPTARG"
#       ;;
#     o)
#       FILEPATH="$OPTARG"
#       ;;
#     \?)
#       echo "Invalid option: -$OPTARG" >&2
#       exit 1
#       ;;
#   esac
# done

# if [ -z "$backend" ]; then
#     echo "Error: WebGPU implementation to run on not provided"
#     exit 1
# fi

# if [ -z "$FILEPATH" ]; then
#     echo "Error: WebGPU program not specified"
#     exit 1
# fi

if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_DIR="macos"
    INTERCEPTORS="DYLD_INSERT_LIBRARIES=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/16/lib/darwin/libclang_rt.asan_osx_dynamic.dylib"
    TIMEOUT_CMD="gtimeout"
    WGPU_BACKEND="DENO_WEBGPU_BACKEND=metal"
    DENO_PATH="/Users/matthew/Documents/msc/final_proj/deno/target/aarch64-apple-darwin/debug/deno"
    export MTL_DEBUG_LAYER=1
else
    OS_DIR="linux"
    INTERCEPTORS="LD_PRELOAD=/usr/lib/gcc/x86_64-linux-gnu/11/libasan.so"
    TIMEOUT_CMD="timeout"
    WGPU_BACKEND="DENO_WEBGPU_BACKEND=vulkan"
    DENO_PATH="/Users/matthew/Documents/msc/final_proj/deno/target/x86_64-unknown-linux-gnu/debug/deno"
    export VK_INSTANCE_LAYERS=VK_LAYER_KHRONOS_validation
fi

# Create reports directory if it does not exist
mkdir -p "${REPORTS_PATH}shaders/${OS_DIR}/"

# Extract filename with extension from FILEPATH
FILENAME=$(basename "$FILEPATH")

# Now extract the number from the filename
# FILENUMBER="${FILENAME%%.*}"

for i in {1..2000}; do
	echo "Running file $i"
    	LOG_FILE_NAME="${REPORTS_PATH}shaders/${OS_DIR}/${i}.log"
	export SHADER_FILE="$i.wgsl"
    	env $INTERCEPTORS node $TEMPLATE_PATH >> "$LOG_FILE_NAME" 2>&1;
done



