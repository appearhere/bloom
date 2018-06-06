const fs = require("fs");
const path = require('path');
const webpackPostcssTools = require('webpack-postcss-tools');

const generateBundle = (entryPoint, outputFile) => {
  // Convert all css variables to a JSON dictionary
  const cssMap = webpackPostcssTools.makeVarMap(entryPoint);

  // Create the bundle code by just exporting the JSON containing those variables
  const bundle = `module.exports = ${JSON.stringify(cssMap)};`;

  fs.writeFile(outputFile, bundle, function(error) {
    if (error) {
      console.error("write error:  " + error.message);
    } else {
      console.log(`${prefix('BUILT')} | output: ${outputFile}`);
    }
  });
}

const srcDir = path.join(__dirname, '../src')
const entryPoint = path.join(srcDir, 'index.css')
const outputFile = path.join(__dirname, '../dist/bundle.js');
const log = console.log.bind(console);
const prefix = (eventName) => eventName.padStart(10);

if (process.argv[2] === '-w' || process.argv[2] === '--watch') {
  const chokidar = require('chokidar');

  const watcher = chokidar.watch(srcDir, {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });

  watcher
    .on('add',       path => log(`${prefix('ADD')} | filename: ${path}`))
    .on('change',    path => log(`${prefix('CHANGE')} | filename: ${path}`))
    .on('unlink',    path => log(`${prefix('UNLINK')} | filename: ${path}`))
    .on('addDir',    path => log(`${prefix('ADD DIR')} | filename: ${path}`))
    .on('unlinkDir', path => log(`${prefix('UNLINK DIR')} | filename: ${path}`))
    .on('error',     error => log(`${prefix('ERROR')} | error: ${error}`))
    .on('ready',     () => log(`${prefix('READY')} | Scan complete. Ready for changes`))
    .on('all', () => generateBundle(entryPoint, outputFile));
} else {
  generateBundle(entryPoint, outputFile)
};