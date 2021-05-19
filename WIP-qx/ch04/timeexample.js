var moment = require('moment');
console.log(moment().format('MM-DD-YYYY'));
console.log(moment().startOf('day').fromNow());
console.log(moment("20111031", "YYYYMMDD").fromNow())