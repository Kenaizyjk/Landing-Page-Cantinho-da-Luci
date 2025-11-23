#!/bin/bash
set -e

echo "🔧 Installing pnpm..."
npm install -g pnpm@9.15.1

echo "📦 Installing dependencies with pnpm..."
pnpm install

echo "🏗️  Building with Next.js..."
pnpm run build

echo "✅ Build completed successfully!"
