const moment = require('moment');
const moment_tz = require('moment-timezone');
console.log(moment().format('MM-DD-YYYY'));

console.log(
moment("20110101","YYYYMMDD").fromNow()
);


let now = moment_tz();

let message =
    moment_tz.tz('America/New_York').format('ha z') + ' is ' +
    moment_tz.tz('America/Los_Angeles').format('ha z');
    console.log(message);

    
    let easternTime = now.tz('America/New_York').format('ha z');
    let pacificTime = now.tz('America/Los_Angeles').format('ha z');

    console.log(`It is now ${easternTime} Eastern and ${pacificTime} Pacific `);
