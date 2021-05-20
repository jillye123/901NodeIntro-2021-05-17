const fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("File Content: " + data);
});

// read file using arrow notation
fs.readFile("./input.txt", (err, data) => {
    console.log(" --- using arrow notation --- ");
    if (err != null) {
        console.error("An error occurred", err);
    } else {
        console.log(data.toString());
        console.log('# of chars = ', data.byteLength);

    }
})

console.log('End of program file');