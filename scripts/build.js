const fs   = require('fs');
const path = require('path');

console.log('🔨 [build] Compiling application...');

const src  = fs.readFileSync(path.join(__dirname, '../src/index.js'), 'utf8');
const out  = `// ⚡ BUILT on ${new Date().toISOString()}\n// Version: ${require('../package.json').version}\n\n` + src;

fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../dist/index.js'), out);

const stats = fs.statSync(path.join(__dirname, '../dist/index.js'));
console.log(`📄 [build] Output → dist/index.js  (${stats.size} bytes)`);
console.log('🎉 [build] Build successful!');
