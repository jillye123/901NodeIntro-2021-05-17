const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, (err, fileContents) => {
    console.log(filePath);
    if (err != null) {
        console.error("An error occurred", err);
    } else {
        console.log('file contents: ', fileContents.toString());
    }
});
// I have renamed the file to input111.txt, but the module still the content is logged on console output. 
