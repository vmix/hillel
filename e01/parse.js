const parseArgs = require('minimist');

let argv = parseArgs(['a1', 2, '0xff']);

console.log(argv);