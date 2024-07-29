#!/bin/bash

# Ensure script exits on error
set -e

# NEED DIFFERENCES ACCORIDING TO MACOS AND LINUX 

# Set constants
REPORTS_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/reports/"
HEADER_PATH="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/headers/"
CONCATENATED_NAME="/Users/matthew/Documents/msc/final_proj/WebGlitchRunner/concatenated.js"

if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_DIR="macos"
    INTERCEPTORS="DYLD_INSERT_LIBRARIES=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/15.0.0/lib/darwin/libclang_rt.asan_osx_dynamic.dylib"
    TIMEOUT_CMD="gtimeout"
    WGPU_BACKEND="DENO_WEBGPU_BACKEND=metal"
    DENO_PATH="/Users/matthew/Documents/msc/final_proj/deno/target/aarch64-apple-darwin/debug/deno"
else
    OS_DIR="linux"
    INTERCEPTORS="LD_PRELOAD=/usr/lib/gcc/x86_64-linux-gnu/11/libasan.so"
    TIMEOUT_CMD="timeout"
    WGPU_BACKEND="DENO_WEBGPU_BACKEND=vulkan"
    DENO_PATH="/Users/matthew/Documents/msc/final_proj/deno/target/x86_64-unknown-linux-gnu/debug/deno"
fi

# Create reports directory if it does not exist
mkdir -p "${REPORTS_PATH}dawn/${OS_DIR}/"

# Set the file path from the first command line argument
FILEPATH="$1"

# Extract filename with extension from FILEPATH
FILENAME=$(basename "$FILEPATH")

# Now extract the number from the filename
FILENUMBER="${FILENAME%%.*}"

# Fetch and concatenate Node Header
cat "${HEADER_PATH}dawnHeader.js" "$FILEPATH" > "$CONCATENATED_NAME"

# Execute file and save output
LOG_FILE_NAME="${REPORTS_PATH}dawn/${OS_DIR}/${FILENUMBER}.log"
grep "Errors enabled\|Errors disabled" $FILENAME > $LOG_FILE_NAME
$TIMEOUT_CMD 30s env $INTERCEPTORS node "$CONCATENATED_NAME" >> "$LOG_FILE_NAME" 2>&1;
exit_code=$?
echo "Exit code: $exit_code" >> "$LOG_FILE_NAME"

# Delete concatenated file
rm "$CONCATENATED_NAME"

# Create reports directory if it does not exist
mkdir -p "${REPORTS_PATH}wgpu/${OS_DIR}/"

# Fetch and concatenate Deno Header
cat "${HEADER_PATH}denoHeader.js" "$FILEPATH" > "$CONCATENATED_NAME"

# Execute file and save output as 1.log
LOG_FILE_NAME="${REPORTS_PATH}wgpu/${OS_DIR}/${FILENUMBER}.log"
grep "Errors enabled\|Errors disabled" $FILENAME > $LOG_FILE_NAME
$TIMEOUT_CMD 30s env $WGPU_BACKEND $DENO_PATH run --allow-read --unstable-webgpu --allow-write "$CONCATENATED_NAME" >> "$LOG_FILE_NAME" 2>&1;
exit_code=$?
echo "Exit code: $exit_code" >> "$LOG_FILE_NAME"


# Delete concatenated file
rm "$CONCATENATED_NAME"
