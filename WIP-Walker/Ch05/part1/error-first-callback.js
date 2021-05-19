
const fs = require("fs");

const wordCount = (para) => para.split(' ');
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('This was in the file input ', data.toString());
    console.log('The number of words = ', wordCount(data.toString()));
});


fs.readFile('content.txt', function(err, data){
    if (err) {
        return console.error(err);
    }
    console.log('This was in the file Content ', data.toString());
})

fs.stat('content.txt', function(err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
})