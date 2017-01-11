#!/usr/bin/env node

const path = require('path');
const argv = require('yargs').argv;

try {
  require(path.join(process.cwd(), 'node_modules/millwright'))(argv._[0]);
}
catch (e) {
  console.log(e);
  console.log('Can\'t find Millwright.js - make sure you\'re in your project\'s root directory.');
}
