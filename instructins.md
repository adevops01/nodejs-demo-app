unzip npm-lifecycle-demo.zip
cd npm-lifecycle-demo
Step 2 — Run npm install and watch the preinstall → install → postinstall → prepare lifecycle fire in sequence.
Step 3 — Run npm test — see pretest → test (5 assertions) → posttest.
Step 4 — Run npm run build — prebuild cleans the /dist folder, then build compiles src/index.js into it, then postbuild confirms success.
Step 5 — Run npm run lint — scans your source files for style issues with the prelint → lint → postlint chain.
Step 6 — Run npm run info — prints Node version, platform, and all available scripts.
Step 7 — Run npm version patch — bumps the version in package.json and fires the version and postversion hooks. Try minor and major too.
Step 8 — Run npm start — starts the HTTP server. Open http://localhost:3000, http://localhost:3000/health, and http://localhost:3000/info in your browser.

The golden rule — for any script named xyz, npm automatically runs pre-xyz before it and post-xyz after it. You just define them in package.json and npm wires them together. Click any command in the interactive guide above to ask me more about it.Npm lifecycle demoZIP DownloadWant to be notified when Claude responds?Notify
