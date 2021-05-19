
const fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('This was in the file input ', data.toString());
});


fs.readFile('content.txt', function(err, data){
    if (err) {
        return console.error(err);
    }
    console.log('This was in the file Content ', data.toString());
})