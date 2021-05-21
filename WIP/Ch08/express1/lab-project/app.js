const moment = require('moment');
const debug = require('debug')('lab-project-serer');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

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

app.get('/', indexRouter);
app.get('/users', usersRouter);

app.use((req, res, next) => {
    if (req.url === '/badrequest') {
        next("PRETENDING TO BE A SERVER ERROR");
    }
    next();
});

app.use((req, res) => {
    res.status(404).send('404 resource not found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke!');
});

module.exports = app;
