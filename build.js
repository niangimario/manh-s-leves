#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyRecursive(src, dest) {
  try {
    if (!fs.existsSync(src)) {
      console.error(`❌ Source not found: ${src}`);
      return false;
    }

    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      
      try {
        if (fs.lstatSync(srcFile).isDirectory()) {
          copyRecursive(srcFile, destFile);
        } else {
          fs.copyFileSync(srcFile, destFile);
        }
      } catch (e) {
        console.error(`Failed to copy ${srcFile}: ${e.message}`);
      }
    });
    return true;
  } catch (e) {
    console.error(`Copy error for ${src}: ${e.message}`);
    return false;
  }
}

console.log('📦 Post-build: Copying assets...');

try {
  // Copy dist/client to public
  if (fs.existsSync('dist/client')) {
    if (fs.existsSync('public')) {
      fs.rmSync('public', { recursive: true, force: true });
    }
    if (copyRecursive('dist/client', 'public')) {
      console.log('✅ Client assets copied to public/');
    }
  } else {
    console.warn('⚠️ dist/client not found (this is OK on first build)');
  }

  // Copy dist/server to server/ to avoid creating nested functions under api/
  if (fs.existsSync('dist/server')) {
    if (fs.existsSync('server')) {
      fs.rmSync('server', { recursive: true, force: true });
    }
    if (copyRecursive('dist/server', 'server')) {
      console.log('✅ Server files copied to server/');
    }
  } else {
    console.error('❌ dist/server not found!');
    process.exit(1);
  }

  console.log('✅ Post-build complete');
  process.exit(0);
} catch (error) {
  console.error('❌ Post-build failed:', error.message);
  process.exit(1);
}

