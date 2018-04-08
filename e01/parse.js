const parseArgs = require('minimist');
const os = require('os');
const chalk = require('chalk');
const colors = require('colors');

console.log('Our platform is: '.bgRed + chalk.red(os.platform()));
console.log('Release is: ' + chalk.green(os.release()));
console.log('Architecture: ' + chalk.yellow(os.arch()));
console.log(chalk.rgb(255,127,127)('CPU Info is: '));
console.log(os.cpus());
console.log(chalk.yellow('Free memory: ') + chalk.green(os.freemem()) + ' of ' + chalk.blue(os.totalmem()) + ' total memory');
console.log('My homedir is: ' + chalk.red(os.homedir()));
console.log('System tmp dir is: ' + chalk.red(os.tmpdir()));
console.log('Operating system is: ' + chalk.green(os.type()));
console.log('User info is: '.green);
console.log(os.userInfo());
console.log('System has already worked during'.bgCyan + ' ' + chalk.red(os.uptime()));