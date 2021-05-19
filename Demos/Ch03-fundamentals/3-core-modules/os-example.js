const os = require("os")

let x=os.cpus;
console.log(x());
let user = os.userInfo();
console.log(user);

console.log(__filename);
console.log(__dirname);

