const os = require('os');
let totalMem = os.totalmem();
let freeMem = os.freemem();

console.log(`Total Memory is ${totalMem} and Free Memory is ${freeMem}`);