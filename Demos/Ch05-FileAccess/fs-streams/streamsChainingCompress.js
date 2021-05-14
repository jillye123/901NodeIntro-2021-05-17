const fs = require("fs");
const zlib = require('zlib');

// Compress the file bigbigfile.txt to bigbigfile.txt.gz
fs.createReadStream('bigbigfile.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('bigbigfile.txt.gz'));
  
console.log("File Compressed.");

