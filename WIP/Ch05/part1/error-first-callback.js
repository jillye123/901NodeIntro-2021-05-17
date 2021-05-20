const fs = require(`fs`);
//get pass variables and print them out
console.log(process.argv);

fs.readFile(`input.txt`, function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(`Asynchronous read:` + data.toString());
});