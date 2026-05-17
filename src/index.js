// ============================================
//  npm-lifecycle-demo  |  src/index.js
// ============================================

const http = require('http');
const os   = require('os');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const routes = {
    '/':       () => ({ message: '🚀 npm-lifecycle-demo is running!', hint: 'Visit /info or /health' }),
    '/health': () => ({ status: 'OK', uptime: process.uptime().toFixed(2) + 's' }),
    '/info':   () => ({
      node:    process.version,
      platform: os.platform(),
      cwd:     process.cwd(),
      env:     process.env.NODE_ENV || 'development',
      pid:     process.pid
    }),
  };

  const handler = routes[req.url] || (() => ({ error: '404 – Route not found' }));
  const body    = JSON.stringify(handler(), null, 2);

  res.writeHead(req.url in routes ? 200 : 404, { 'Content-Type': 'application/json' });
  res.end(body);
});

server.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════╗');
  console.log('  ║   npm-lifecycle-demo  RUNNING     ║');
  console.log('  ╠══════════════════════════════════╣');
  console.log(`  ║   http://localhost:${PORT}            ║`);
  console.log('  ║   Routes: /  /health  /info       ║');
  console.log('  ║   Press Ctrl+C to stop            ║');
  console.log('  ╚══════════════════════════════════╝');
  console.log('');
});
