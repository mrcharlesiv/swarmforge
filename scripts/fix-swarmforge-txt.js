#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Post-build script to fix React Server Components (RSC) 404 errors
 * 
 * PROBLEM: Next.js App Router with output: 'export' and basePath generates
 * RSC prefetch requests to /swarmforge.txt at the domain root, but the
 * static export only creates /swarmforge/index.txt. This causes 404 errors
 * in the browser console for RSC prefetch requests.
 * 
 * SOLUTION: Copy index.txt content to swarmforge.txt in the dist directory
 * so both /swarmforge/ and /swarmforge.txt resolve correctly.
 */

const distPath = path.join(__dirname, '..', 'dist');
const swarmforgeTxtPath = path.join(distPath, 'swarmforge.txt');

console.log('🔧 Post-build: Fixing RSC 404 errors...');

try {
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ Error: dist directory does not exist');
    process.exit(1);
  }

  // Copy content from index.txt to swarmforge.txt to make it a valid RSC file
  const indexTxtPath = path.join(distPath, 'index.txt');
  if (fs.existsSync(indexTxtPath)) {
    const indexContent = fs.readFileSync(indexTxtPath, 'utf8');
    fs.writeFileSync(swarmforgeTxtPath, indexContent);
    const stats = fs.statSync(swarmforgeTxtPath);
    console.log(`✅ swarmforge.txt created (${stats.size} bytes)`);
  } else {
    // Fallback: create empty file if index.txt doesn't exist
    fs.writeFileSync(swarmforgeTxtPath, '');
    console.log('⚠️  swarmforge.txt created with empty content (index.txt not found)');
  }
  
  // Verify file was created
  if (fs.existsSync(swarmforgeTxtPath)) {
    console.log('✅ Verified: swarmforge.txt exists in dist directory');
  } else {
    console.error('❌ Error: swarmforge.txt was not created');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error creating swarmforge.txt:', error);
  process.exit(1);
}