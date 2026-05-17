const pkg = require('../package.json');
const os  = require('os');

console.log('');
console.log('═══════════════════════════════════════');
console.log('         PROJECT INFORMATION');
console.log('═══════════════════════════════════════');
console.log(`  Name       : ${pkg.name}`);
console.log(`  Version    : ${pkg.version}`);
console.log(`  Description: ${pkg.description}`);
console.log(`  Main       : ${pkg.main}`);
console.log('');
console.log('  ENVIRONMENT');
console.log(`  Node.js    : ${process.version}`);
console.log(`  npm        : run "npm --version"`);
console.log(`  Platform   : ${os.platform()} (${os.arch()})`);
console.log(`  CWD        : ${process.cwd()}`);
console.log('');
console.log('  SCRIPTS AVAILABLE');
Object.keys(pkg.scripts)
  .filter(s => !s.startsWith('pre') && !s.startsWith('post'))
  .forEach(s => console.log(`  npm run ${s}`));
console.log('═══════════════════════════════════════');
