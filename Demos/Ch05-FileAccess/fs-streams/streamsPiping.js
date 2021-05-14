const fs = require("fs");

// Create a readable stream
let readerStream = fs.createReadStream('input.txt');

// Create a writable stream
let writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

