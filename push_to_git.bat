@echo off
echo ===================================================
echo Reinitializing Git and Pushing Project...
echo ===================================================

:: Clean up duplicate scripts
if exist "rename_images.py" (
    del /f /q "rename_images.py"
)

echo Initializing a fresh Git repository...
git init

echo Linking to GitHub remote...
git remote add origin https://github.com/abdulrahmann12/mallak.git

echo Staging all project files and images...
git add .

echo Committing files...
git commit -m "Initialize Mallak's 18th birthday scrapbook card website"

echo Setting branch to main...
git branch -M main

echo Pushing to GitHub (Force)...
git push -u origin main --force

echo.
echo ===================================================
echo Pushed successfully to GitHub!
echo ===================================================
pause
