//Best practice, use const - 
//you wont be changing the module!
const log = require('./logger');

//only exported one thing, can use directly
log.display('something');
log.display('else')

console.log(log.getPrivateInfo());

