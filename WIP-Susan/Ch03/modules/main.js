const add = require('./add.js');
const Calculator = require('./calculator.js');

//use function
console.log('5+7=', add(5,7));


const myCalc = new Calculator();

console.log(`5+7=`, myCalc.add(5,7));
console.log(`5-7=`, myCalc.subtract(5,7));
console.log(`5*7=`, myCalc.multiple(5,7));



