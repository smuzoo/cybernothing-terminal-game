# Troubleshooting Build Issues

## Rollup Native Module Error

If you encounter the error:
```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

This is a known npm bug with optional dependencies. Here are several solutions:

### Solution 1: Clean Install (Recommended)
```bash
# Remove existing dependencies
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Install Rollup dependencies explicitly
npm install @rollup/rollup-linux-x64-gnu --force
```

### Solution 2: Use Build Scripts
```bash
# On Linux/Mac
chmod +x build.sh
./build.sh

# On Windows PowerShell
.\build.ps1
```

### Solution 3: Manual Fix
```bash
npm install @rollup/rollup-linux-x64-gnu --force
npm install @rollup/rollup-darwin-x64 --force
npm install @rollup/rollup-win32-x64-msvc --force
```

### Solution 4: Environment Variable
```bash
export ROLLUP_SKIP_NATIVE=false
npm run build
```

## CI/CD Fixes

The GitHub Actions workflow has been updated to handle this issue automatically by:

1. Installing dependencies normally
2. Explicitly installing Rollup native modules for all platforms
3. Setting environment variables to ensure proper build

## Package.json Changes

The package.json has been updated with:
- Explicit Rollup dependencies
- Optional dependencies section
- Clean script for easy dependency reset

## Vite Configuration

The vite.config.js has been updated to:
- Exclude problematic Rollup dependencies from optimization
- Add server configuration for better development experience 