@echo off
setlocal enabledelayedexpansion

:: Set constants
set REPORTS_PATH=D:\final_proj\WebGlitchRunner\reports\
set HEADER_PATH=D:\final_proj\WebGlitchRunner\headers\
SET CONCATENATED_NAME=D:\final_proj\WebGlitchRunner\concatenated.js

if not exist "%REPORTS_PATH%" mkdir "%REPORTS_PATH%"

:: Set the file path from the first command line argument
set FILEPATH=%~1

:: Extract filename with extension from FILEPATH
for %%i in ("%FILEPATH%") do set "FILENAME=%%~nxi" 

:: Now extract the number from the filename
for /f "delims=." %%a in ("%FILENAME%") do set "FILENUMBER=%%a"

:: Fetch and concatenate Node Header
copy /b %HEADER_PATH%dawnHeader.js + %FILEPATH% %CONCATENATED_NAME% > NUL

:: Execute file and save output 
cmd /c node "%CONCATENATED_NAME%" > "%REPORTS_PATH%dawn\windows\%FILENUMBER%.log" 2>&1

:: Delete concatenated file
del %CONCATENATED_NAME%

:: Fetch and concatenate Deno Header
: copy /b %HEADER_PATH%denoHeader.js + %FILEPATH% %CONCATENATED_NAME% > NUL

:: Execute file and save output as 1.log
: cmd /c DENO_WEBGPU_BACKEND=dx12 deno run --allow-read --unstable-webgpu --allow-write "%CONCATENATED_NAME%" > "%REPORTS_PATH%wgpu\%FILENUMBER%.log" 2>&1

:: Delete concatenated file
: del %CONCATENATED_NAME%

endlocal