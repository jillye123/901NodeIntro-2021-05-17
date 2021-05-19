const moment = require('moment');
const moment_ts = require('moment-timezone');

console.log(moment().format('MM-DD-YYYY'));
console.log(moment('01-01-2011', 'MM-DD-YYYY').format());

console.log(
    moment_ts().format('hh:mm:ss')
);

console.log(
    `current time is: 
    ${moment().format('MM-DD-YYYY')} ${moment_ts().format('hh:mm:ss')}`);