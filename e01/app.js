const person = require('./module01');
require('./module02');
const square = require('./module03');

// first method
console.log('\nName: ' + person.john.name + ' has age: ' + person.john.age);

// second method
console.log('User\'s height is ' + User.height);

// third method
let mySquare = square(3);
console.log(`This area is: ${mySquare.area()} sq. meters`);