const os = require('os');

let freeMem = os.freemem();
let totalMem = os.totalmem();

console.log(`Total memory: ${freeMem} Free memory: ${totalMem}`);