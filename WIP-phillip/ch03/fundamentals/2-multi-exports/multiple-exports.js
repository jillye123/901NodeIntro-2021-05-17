const url = 'http://bands.com/api';
function log (message) {
    console.log(message);
}
module.exports.log = log;
module.exports.api = url;