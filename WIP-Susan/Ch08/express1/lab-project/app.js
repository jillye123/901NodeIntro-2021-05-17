var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require('moment');
const debug = require('debug')('lab-project:server');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	debug('in the first custom middleware');
	// console.log(`req.url`, req.url);
	let now = moment().format('MMMM Do YYYY, h:mm:ss a');
	debug(`Debug Time: ${now} and the URL is ${req.url}`);
	next();
});

// app.all("*", function (req, res, next) {
// 	debug('in all routes - next');
// 	next();
// });

// app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hobbies', require('./routes/hobbies'))


app.use((req, res, next) => {
	if (req.url === '/badrequest') {
		next("PRETENDING TO BE A SERVER ERROR")
	}
	next();
});

// PUT THIS LAST - no one should make it here...
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
	res.status(404).send('404 resource not found');
});


// eslint-disable-next-line no-unused-vars
app.use((err, request, response, next) => {
	// log the error, for now just console.log
	console.log(err);
	response.status(500).send('Something broke!');
});



module.exports = app;
