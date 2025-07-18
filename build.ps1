Write-Host "Cleaning up..." -ForegroundColor Green
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

Write-Host "Installing Rollup dependencies explicitly..." -ForegroundColor Green
npm install @rollup/rollup-linux-x64-gnu --force

Write-Host "Building project..." -ForegroundColor Green
npm run build

Write-Host "Build completed!" -ForegroundColor Green 