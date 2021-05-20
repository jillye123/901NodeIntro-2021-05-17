const add = require('./add.js');
const Calculator = require('./calculator.js');
const Band = require('./constructor-band.js');

console.log('5+7=', add(5,7));

const calc = new Calculator();
console.log(`1+2=`, calc.add(1,2));
console.log(`5*6=`, calc.multiple(5,6));
console.log(`15-12=`, calc.subtract(15,12));

const beatles = new Band ('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
console.log(`Band ${beatles.name} has ${beatles.memberCount}`);