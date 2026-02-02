#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Post-build script to fix the swarmforge.txt 404 error
// This creates an empty swarmforge.txt file in the dist directory

const distPath = path.join(__dirname, '..', 'dist');
const swarmforgeTxtPath = path.join(distPath, 'swarmforge.txt');

console.log('🔧 Post-build: Creating swarmforge.txt to fix 404 error...');

try {
  // Create an empty swarmforge.txt file
  fs.writeFileSync(swarmforgeTxtPath, '');
  console.log('✅ swarmforge.txt created successfully');
  
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