# npm Lifecycle Demo

A hands-on Node.js project to learn every npm command.

## Quick Start
```bash
npm install        # Install dependencies
npm start          # Start the server
npm test           # Run tests
npm run build      # Build the project
npm run lint       # Lint the code
npm run info       # Show project info
```

## Lifecycle Order
preinstall → install → postinstall
prestart   → start   → poststart
prebuild   → build   → postbuild
pretest    → test    → posttest
