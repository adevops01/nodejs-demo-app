const fs   = require('fs');
const path = require('path');

console.log('🔍 [lint] Checking code style...\n');

const files = ['src/index.js', 'scripts/build.js', 'scripts/test.js'];
const rules = [
  { pattern: /console\.log/,            label: 'console.log usage',         severity: 'info'    },
  { pattern: /var /,                    label: 'var usage (use let/const)',  severity: 'warning' },
  { pattern: /==(?!=)/,                 label: '== instead of ===',         severity: 'warning' },
  { pattern: /TODO|FIXME/,              label: 'TODO/FIXME comment found',  severity: 'info'    },
];

let issues = 0;
for (const file of files) {
  const src   = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    for (const rule of rules) {
      if (rule.pattern.test(line)) {
        const icon = rule.severity === 'warning' ? '⚠️ ' : 'ℹ️ ';
        console.log(`  ${icon} ${file}:${i+1}  [${rule.severity}]  ${rule.label}`);
        if (rule.severity === 'warning') issues++;
      }
    }
  });
}

console.log(`\n  Lint complete. ${issues} warning(s) found.`);
