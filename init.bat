@echo off
echo =======================================================
echo Initializing IEEE CIDSBA Conference Website Project...
echo =======================================================

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Error: Node.js is not installed. Please install Node.js v18+ and try again.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo ✅ Node.js version: %NODE_VER%

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Error: npm is not installed.
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo ✅ npm version: %NPM_VER%

echo 📦 Installing npm dependencies...
call npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies.
    exit /b 1
)

echo.
echo =======================================================
echo 🎉 Initialization Complete!
echo To start the development server, run:
echo    npm run dev
echo =======================================================
