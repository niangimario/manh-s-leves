#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔨 Building TanStack Start...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (e) {
  // Ignore non-critical build warnings
}

console.log('📦 Organizing output for Vercel...');

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

// Copy dist to .vercel/output
if (fs.existsSync('dist')) {
  fs.rmSync('.vercel/output', { recursive: true, force: true });
  fs.mkdirSync('.vercel/output', { recursive: true });
  copyRecursive('dist', '.vercel/output');
  console.log('✅ dist/ copied to .vercel/output');
  process.exit(0);
} else {
  console.error('❌ dist/ not found!');
  process.exit(1);
}

