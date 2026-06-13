#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return false;
  
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
  
  return true;
}

console.log('🔨 Building...');

try {
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('📦 Preparing output...');
  
  // Create output structure
  fs.mkdirSync('.vercel/output', { recursive: true });
  
  // Copy everything from dist to .vercel/output
  if (fs.existsSync('dist')) {
    copyRecursive('dist', '.vercel/output');
    console.log('✓ Copied dist to .vercel/output');
  }
  
  console.log('✅ Done!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
