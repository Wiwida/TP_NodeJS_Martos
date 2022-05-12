var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');
var trainRouter = require('./routes/train');
const port = 8000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/train', trainRouter);

app.listen(port, () => {
    console.log('Server app listening on port', port, '🚀');
});
module.exports = app;
