#!/usr/bin/env node
require('colors');
const { writtetabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

writtetabla(argv.b, argv.l, argv.a)
  .then(e => console.log(e.rainbow))
  .catch(err => console.log(err));
  
  
// [ , , arg3 = '--base=5'] = process.argv;
// [, base=5] = arg3.split('=')[1];
// console.log(process.argv)
// console.clear();
// console.log(argv);
// console.log(`base yargs: ${argv.base}`);