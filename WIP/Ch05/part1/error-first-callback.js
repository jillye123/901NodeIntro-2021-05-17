const fs = require('fs');

console.log('Start to open file input.txt');
fs.open('input.txt', function(err, fd) {

    if (err) {
        console.log('Error happened: ${err}');
    }
    console.log(`file opened with id: ${fd}`);
});

console.log(`start to read input.txt`);
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(`error : ${err}`);
    }

    console.log(`file content: 
    ${data}`);
});