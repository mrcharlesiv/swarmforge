#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Post-build script to fix the swarmforge.txt 404 error
// This creates an empty swarmforge.txt file in the dist directory

const distPath = path.join(__dirname, '..', 'dist');
const swarmforgeTxtPath = path.join(distPath, 'swarmforge.txt');

console.log('🔧 Post-build: Creating swarmforge.txt to fix 404 error...');

try {
  // Copy content from index.txt to swarmforge.txt to make it a valid RSC file
  const indexTxtPath = path.join(distPath, 'index.txt');
  if (fs.existsSync(indexTxtPath)) {
    const indexContent = fs.readFileSync(indexTxtPath, 'utf8');
    fs.writeFileSync(swarmforgeTxtPath, indexContent);
    console.log('✅ swarmforge.txt created with content from index.txt');
  } else {
    // Fallback to empty file if index.txt doesn't exist
    fs.writeFileSync(swarmforgeTxtPath, '');
    console.log('✅ swarmforge.txt created with empty content');
  }
  
  // Verify it was created
  if (fs.existsSync(swarmforgeTxtPath)) {
    console.log('✅ Verified: swarmforge.txt exists in dist directory');
  } else {
    console.log('❌ Error: swarmforge.txt was not created');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error creating swarmforge.txt:', error);
  process.exit(1);
}