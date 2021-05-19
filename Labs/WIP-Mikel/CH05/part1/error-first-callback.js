const fs = require("fs");
//Depending on your file system, you may need to read with character encoding set to utf8 
//fs.readFile("./input.txt",{encoding: 'utf-8'}, (err, fileContents) => {
//OR
fs.readFile("./input.txt",  (err, fileContents) => {

    if (err != null) {
		console.error("An error occurred", err);
	} else {
		console.log(fileContents.toString());
	}
})

//If you create a file using VS Code it needs to be read with utf8 set
//fs.readFile("./input.txt",{encoding: 'utf-8'}, (err, fileContents) => {
//OR
//fs.readFile("./input.txt", 'utf-8', (err, fileContents) => {
