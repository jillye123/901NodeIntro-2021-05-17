const moment = require('moment');
console.log(moment().format('MM-DD-YYYY'));
let timelapse = moment("01-01-2011" , "MM-DD-YYYY").fromNow();
console.log(timelapse);


const momenttz = require('moment-timezone');
let now = momenttz();
let easternTime = now.tz('America/New_York').format('ha z');
let pacificTime = now.tz('America/Los_Angeles').format('ha z');
 console.log(`It is now ${easternTime} Eastern and ${pacificTime} Pacific `);

