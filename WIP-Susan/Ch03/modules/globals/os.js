const os = require('os');
let totalMem = os.totalmem();
let totalFreeMem = os.freemem();

console.log(`Total Memory is ${totalMem}; Total Free Memory is ${totalFreeMem}`); 
