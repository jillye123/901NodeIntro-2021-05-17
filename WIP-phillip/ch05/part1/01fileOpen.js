const fs = require("fs");
// asynchronous - opening file
console.log('Going to open file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err.message);
    }
    console.log(fd);
    console.log('file opened successfully');
})