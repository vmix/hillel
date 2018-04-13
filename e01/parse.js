'use strict';

const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));

console.log(chalk.blue(process.env.NODE_ENV));
console.log(chalk.red(process.env.PORT));