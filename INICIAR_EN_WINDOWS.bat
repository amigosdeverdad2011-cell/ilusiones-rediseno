@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ==============================================
echo   ILUSIONES - PROYECTO WEB EDITABLE
 echo ==============================================
where npm >nul 2>&1
if errorlevel 1 (
  echo ERROR: Necesitas Node.js. Descargalo desde https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (
  echo Instalando dependencias, primera ejecucion...
  call npm install
  if errorlevel 1 (pause & exit /b 1)
)
echo Iniciando el servidor de desarrollo...
echo Cuando se muestre la direccion local, abrela en el navegador.
call npm run dev
pause
