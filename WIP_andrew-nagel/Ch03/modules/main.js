const Calculator = require('./calculator.js');

const myCalc = new Calculator();
console.log(`1 + 2 = `, myCalc.add(1, 2));
console.log(`1 - 2 = `, myCalc.subtract(1, 2));
console.log(`1 / 2 = `, myCalc.divide(1, 2));
