const os = require('os');

let totmem = os.totalmem();
let freemem = os.freemem();

console.log(`Total Memory ${totmem} Free Memory ${freemem}`); 