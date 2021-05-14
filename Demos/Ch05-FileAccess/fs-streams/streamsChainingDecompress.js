const fs = require("fs");
const zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");