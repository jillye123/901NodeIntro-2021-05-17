const os = require('os');

console.log(`Total memory: ${os.totalmem()}`);
console.log(`Free memory: ${os.freemem}`);
console.log(`Hostname: ${os.hostname}`);

let user = os.userInfo();
console.log(user);