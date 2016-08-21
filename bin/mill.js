#!/usr/bin/env node

const path = require('path');
const argv = require('yargs').argv;

require(path.join(process.cwd(), 'node_modules/millwright'))(argv._[0]);

/*
try {
  require('./node_modules/millwright')(...argv._[0]);
}
catch (e) {
  console.log('Can\'t find Millwright - are you sure it\'s installed?');
}
*/
