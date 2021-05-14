console.log(`req another file:\n\t${__filename}`);

console.log(`req another directory:\n\t${__dirname}`);
 
const another = require("./another/another-module.js");
another();
