#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function main() {
  console.log('🔨 Building with Vite...');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('📦 Preparing Vercel output structure...');
    
    // Create Vercel output structure
    fs.mkdirSync('.vercel/output/static', { recursive: true });
    fs.mkdirSync('.vercel/output/functions', { recursive: true });
    
    // Copy client assets to static
    if (fs.existsSync('dist/client')) {
      copyRecursive('dist/client', '.vercel/output/static');
      console.log('✓ Copied dist/client to .vercel/output/static');
    }
    
    // Copy server to functions  
    if (fs.existsSync('dist/server')) {
      copyRecursive('dist/server', '.vercel/output/functions');
      console.log('✓ Copied dist/server to .vercel/output/functions');
    }
    
    console.log('✅ Build complete and ready for Vercel!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

main();
