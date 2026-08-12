#!/usr/bin/env bash

# IEEE CIDSBA Conference Web Application - Initialization Script

echo "======================================================="
echo "Initializing IEEE CIDSBA Conference Website Project..."
echo "======================================================="

# Check Node.js version
if ! command -v node &> /dev/null
then
    echo "❌ Error: Node.js is not installed. Please install Node.js v18+ and try again."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Check npm
if ! command -v npm &> /dev/null
then
    echo "❌ Error: npm is not installed."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm version: $NPM_VERSION"

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies."
    exit 1
fi

echo ""
echo "======================================================="
echo "🎉 Initialization Complete!"
echo "To start the development server, run:"
echo "   npm run dev"
echo "======================================================="
