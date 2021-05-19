const moment = require('moment');
console.log(moment().format('MM-DD-YYYY'));

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment().format('LLLL'));

console.log(moment("20110101", "YYYYMMDD").fromNow());