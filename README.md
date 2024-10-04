# WebGlitchRunner

A WebGPU program runner (intended to be integrated with WebGlitch)

## Requirements:

1. Node.js v20+
2. http-server v14+
3. If you intend on executing in-browser, before executing run.py or calling it through WebGlitch.py, run `npx http-server </path/to/WebGlitch/rsrcs/html> -p <port>` (e.g., npx http-server D:/final_proj/WebGlitch/rsrcs/html -p 8080)

Please update the following variables with the relevant paths on your own system:

1. WEBGLITCH_PATH
2. WEBGLITCH_RUNNER_PATH
3. DENO_PATH
4. CHROME_PATH
5. FIREFOX_PATH
6. MACOS_INTERCEPTORS
7. LINUX_INTERCEPTORS
