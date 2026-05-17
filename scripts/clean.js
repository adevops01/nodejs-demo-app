const fs   = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
  console.log('🗑️  [clean] Removed /dist directory');
} else {
  console.log('✨ [clean] Nothing to clean — /dist does not exist');
}
