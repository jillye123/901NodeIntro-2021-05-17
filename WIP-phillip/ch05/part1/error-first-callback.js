const fs = require('fs');
fs.readFile("input.txt", (err, fileContents) => {

    if (err != null) {
        console.error("An error occurred", err);
    } else {
        console.log('file contents: ', fileContents.toString());
    }
})
// I have renamed the file to input111.txt, but the module still the content is logged on console output.
