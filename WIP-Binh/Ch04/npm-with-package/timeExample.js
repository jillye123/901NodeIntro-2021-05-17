let moment = require('moment');
let moment_tz = require('moment-timezone');
console.log(moment().format('MM-DD-YYYY'));

console.log(
    moment("20110101", "YYYYMMDD").fromNow()
);

let currentTime = moment_tz();
let eTime = currentTime.tz('America/New_York').format('ha z');
let pTime = currentTime.tz('America/Los_Angeles').format('ha z');
console.log(`Easter current time is ${eTime}`);
console.log(`Pacific current time is ${pTime}`);


