
const fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data);

    console.log('End of program file');
});
  console.log("File read successfully")