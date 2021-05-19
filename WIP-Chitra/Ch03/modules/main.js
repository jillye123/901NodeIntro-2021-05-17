const add = require('./add.js');
console.log('5+7=', add(5,7));


const Calculator = require('./calculator.js');
const myCalc = new Calculator();
console.log(`1+2=`, myCalc.add(1,2));
console.log(`2-1=`, myCalc.subtract(1,2));
console.log(`5*5=`, myCalc.multiply(5,5));