var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const moment = require('moment');
const debug = require('debug')('lab-project:server');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    debug('in the first custom middleware');

    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    debug(`Debug Time: ${now} and the URL is ${req.url}`);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// missing file handling
app.use((req, res) => {
    res.status(404).send('404 resource not found');
});

app.use((err, req, res, next) => {
    // log the error
    console.log(err);
    res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
    if (req.url === '/badrequest') {
        next("PRETENDING TO BE A SERVER ERROR");
    }
    next();
});

module.exports = app;
