const add = require('./add.js');

console.log('5+7=', add(5,7));

const Calculator = require('./calculator.js');
const myCalc = new Calculator();

console.log(`1+2=`, myCalc.add(1,2));

console.log(`5-3=`, myCalc.subtract(5,3));

console.log(`5*3=`, myCalc.multiplication(5,3));