const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

Promise.try(() => {
    return fs.appendFileAsync("input.txt", "Write more about promise.");
}).then(() => {

});