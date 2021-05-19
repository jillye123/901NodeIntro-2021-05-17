const add = require('./add.js');
const subtract = require('subtract.js');
const multiply = require('multiply.js');

console.log('5+7=', add(5,7));


const Calculator = require('./calculator.js');
    const myCalc = new Calculator();

    console.log(`1+2=`, myCalc.add(1,2));
    console.log(`1-2=`, myCalc.subtract(1,2));
    console.log(`1*2=`, myCalc.multiply(1,2));