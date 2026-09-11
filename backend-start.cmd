@echo off
cd /d "%~dp0backend"
call venv\Scripts\uvicorn.exe server:app --host 0.0.0.0 --port 8000 --reload
