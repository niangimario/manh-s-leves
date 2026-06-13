#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔨 Building TanStack Start...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📦 Copying assets to public...');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

// Copy dist/client to public
if (fs.existsSync('dist/client')) {
  fs.rmSync('public', { recursive: true, force: true });
  copyRecursive('dist/client', 'public');
  console.log('✅ Assets copied to public/');
} else {
  console.error('❌ dist/client not found!');
  process.exit(1);
}
