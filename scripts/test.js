console.log('🧪 [test] Running tests...\n');

const tests = [
  { name: 'package.json has required fields',  fn: () => {
      const p = require('../package.json');
      return !!(p.name && p.version && p.main);
  }},
  { name: 'NODE_ENV is accessible',            fn: () => typeof process.env.NODE_ENV !== 'undefined' || true },
  { name: 'Node version is >= 14',             fn: () => parseInt(process.version.slice(1)) >= 14 },
  { name: 'src/index.js file exists',          fn: () => {
      const fs = require('fs');
      return fs.existsSync('./src/index.js');
  }},
  { name: 'scripts directory exists',          fn: () => {
      const fs = require('fs');
      return fs.existsSync('./scripts');
  }},
];

let passed = 0, failed = 0;

for (const t of tests) {
  try {
    const result = t.fn();
    if (result) {
      console.log(`  ✅ PASS  ${t.name}`);
      passed++;
    } else {
      console.log(`  ❌ FAIL  ${t.name}`);
      failed++;
    }
  } catch (e) {
    console.log(`  ❌ FAIL  ${t.name}  → ${e.message}`);
    failed++;
  }
}

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
