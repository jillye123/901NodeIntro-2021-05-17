const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
console.log("going to get file info!");

Promise.try(() => {
    return fs.statAsync("input.txt");
}).then((stats) => {
    console.log(stats);
    console.log("got the file info");
    console.log(`isFile ? ${stats.isFile()}`);
})
console.log('program End');
