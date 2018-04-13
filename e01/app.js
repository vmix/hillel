const person = require('./module01');
const user = require('./module02');
const mod4 = require('./module04');

// first method
console.log('\nName: ' + person.john.name + ' has age: ' + person.john.age);

// second method
console.log('User\'s height is ' + User.height);

//third method
console.log(mod4.add(1, 4));
console.log(mod4.divide(10, 2));
