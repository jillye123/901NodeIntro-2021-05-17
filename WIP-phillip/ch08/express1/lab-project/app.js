var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require('moment');
const debug = require('debug')('lab-project:server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    debug('in the first custom middleware');
    let now = moment().format('MMM Do YYYY, h:mm:ss a');
    debug(`Debug Time: ${now} and the URL is ${req.url}`);
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
