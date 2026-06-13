#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// Copy dist/client to public (Vercel serves public as static)
if (fs.existsSync('dist/client')) {
  fs.rmSync('public', { recursive: true, force: true });
  copyRecursive('dist/client', 'public');
  console.log('Assets copied to public/');
}

// Copy dist/server to api/server (Serverless function needs it)
if (fs.existsSync('dist/server')) {
  fs.rmSync('api/server', { recursive: true, force: true });
  copyRecursive('dist/server', 'api/server');
  console.log('Server files copied to api/server');
}
