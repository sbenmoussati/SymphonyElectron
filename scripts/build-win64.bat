@echo off
setlocal EnableExtensions DisableDelayedExpansion

:: ================================
:: VSDevCmd
:: ================================
echo === Starting VSDev Command Prompt ===
call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"

:: ================================
:: Node / NVM / NPM
:: ================================
set NODE_REQUIRED_VERSION=22.14.0
set PATH=%PATH%;C:\Program Files\nodejs\;C:\Program Files\Git\cmd;C:\Program Files (x86)\GnuWin32\bin

call nvm install %NODE_REQUIRED_VERSION%
call nvm use %NODE_REQUIRED_VERSION%
call npm config set msvs_version 2017

:: ================================
:: PATHS
:: ================================
set "rootDir=%CD%"
set "SCREENSHARE_INDICATOR_PATH=%rootDir%\node_modules\screen-share-indicator-frame\ScreenShareIndicatorFrame.exe"
set "NATIVE_WINDOW_HANDLE_PATH=%rootDir%\node_modules\symphony-native-window-handle-helper\SymphonyNativeWindowHandleHelper.exe"
set "SCREEN_SNIPPET_PATH=%rootDir%\node_modules\screen-snippet\ScreenSnippet.exe"
set "SYMPHONY_EXE_PATH=%WORKSPACE%\dist\win-unpacked\Symphony.exe"
set "SYMPHONY_MSI_PATH=%rootDir%\WixSharpInstaller\Symphony.msi"

(
  endlocal
  set "SCREENSHARE_INDICATOR_PATH=%SCREENSHARE_INDICATOR_PATH%"
  set "NATIVE_WINDOW_HANDLE_PATH=%NATIVE_WINDOW_HANDLE_PATH%"
  set "SCREEN_SNIPPET_PATH=%SCREEN_SNIPPET_PATH%"
  set "SYMPHONY_EXE_PATH=%SYMPHONY_EXE_PATH%"
  set "SYMPHONY_MSI_PATH=%SYMPHONY_MSI_PATH%"
)

echo SCREENSHARE_INDICATOR_PATH=%SCREENSHARE_INDICATOR_PATH%
echo NATIVE_WINDOW_HANDLE_PATH=%NATIVE_WINDOW_HANDLE_PATH%
echo SCREEN_SNIPPET_PATH=%SCREEN_SNIPPET_PATH%
echo SYMPHONY_EXE_PATH=%SYMPHONY_EXE_PATH%
echo SYMPHONY_MSI_PATH=%SYMPHONY_MSI_PATH%
echo ============================

:: ================================
:: Install dependencies
:: ================================
echo === Installing npm dependencies ===
call npm install

:: ================================
:: Snyk test & monitor
:: ================================
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%b
echo Current branch: %CURRENT_BRANCH%
call snyk test --file=package-lock.json --org=%SNYK_ORG% --project-name=Symphony-Desktop-Application --remote-repo-url="Symphony-Desktop-Application:%CURRENT_BRANCH%"
call snyk monitor --file=package-lock.json --org=%SNYK_ORG% --project-name=Symphony-Desktop-Application --remote-repo-url="Symphony-Desktop-Application:%CURRENT_BRANCH%"

:: ================================
:: Sign binaries
:: ================================
call :sign_file "%SCREENSHARE_INDICATOR_PATH%"
call :sign_file "%NATIVE_WINDOW_HANDLE_PATH%"
call :sign_file "%SCREEN_SNIPPET_PATH%"

:: ================================
:: Build unpacked Windows app
:: ================================
echo === Running build ===
call npm run unpacked-win

:: ================================
:: Prepare version and targets
:: ================================
call node -e "console.log(require('./package.json').version);" > version.txt
set /p SYMVER=<version.txt
if "%SYMVER%"=="" (
    echo [ERROR] Failed to read version
    exit /b -1
)

echo Creating targets directory
rmdir /q /s targets 2>nul
mkdir targets
set "targetsDir=%rootDir%\targets"

:: ================================
:: Sign Symphony exe
:: ================================
call :sign_file "%SYMPHONY_EXE_PATH%"
call :sign_file "%WORKSPACE%\dist\Symphony-%SYMVER%-win-x64.exe"

node ..\..\scripts\windows_update_checksum.js "..\..\dist\Symphony-%SYMVER%-win-x64.exe" "..\..\dist\latest.yml"

:: ================================
:: Build MSI
:: ================================
cd "%rootDir%\installer\win"
call "BuildWixSharpInstaller.bat"

signtool sign /d Symphony /tr http://timestamp.digicert.com /td SHA256 /fd SHA256 /sha1 %DIGICERT_FINGERPRINT% "%SYMPHONY_MSI_PATH%"
smctl sign verify --input "%SYMPHONY_MSI_PATH%" || exit /b -1

copy "%SYMPHONY_MSI_PATH%" "%targetsDir%\Symphony-Win64-%SYMVER%.msi"

:: ================================
:: Generate PDF docs
:: ================================
where markdown-pdf >nul 2>&1 || call npm install -g markdown-pdf

call "%appdata%\npm\markdown-pdf" install_instructions_win.md
copy install_instructions_win.pdf "%targetsDir%\Install-Instructions-Symphony-Win64-%SYMVER%.pdf"

call "%appdata%\npm\markdown-pdf" RELEASE_NOTES.md
copy RELEASE_NOTES.pdf "%targetsDir%\Release-Notes-Symphony-Win64-%SYMVER%.pdf"

echo === Build complete ===
exit /b 0

:: ==============================
:: Sign function
:: ==============================
:sign_file
set "FILE=%~1"
if "%FILE%"=="" (
    echo [ERROR] Missing argument in sign_file
    exit /b -1
)
if not exist "%FILE%" (
    echo [ERROR] File not found: %FILE%
    exit /b -1
)
echo [INFO] Signing "%FILE%" ...
smctl sign --tool signtool --fingerprint %DIGICERT_FINGERPRINT% --input "%FILE%" --verbose || exit /b -1
smctl sign verify --input "%FILE%" || exit /b -1
goto :eof
