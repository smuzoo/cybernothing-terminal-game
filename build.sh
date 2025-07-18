#!/bin/bash

echo "Cleaning up..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
npm install

echo "Installing Rollup dependencies explicitly..."
npm install @rollup/rollup-linux-x64-gnu --force

echo "Building project..."
npm run build

echo "Build completed!" 