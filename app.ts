var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

<<<<<<< HEAD
var indexRouter = require('./routes');
var trainRouter = require('./routes/train');
const port = process.env.PORT || 8000;
const url = `http://localhost:${port}/`;
=======
var indexRouter = require('./routes')
var trainRouter = require('./routes/train')
var reservationRouter = require('./routes/reservation')

const port = process.env.PORT || 8000
const url = `http://localhost:${port}/`
>>>>>>> c2a6fd02086940b83de09cfc66780985400d68ff

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/train', trainRouter)
app.use('/reservation', reservationRouter)

app.listen(port, () => {
    console.log('Server app listening on port', port, '✅')
    console.log('Go to with', url, '🚀')
})
module.exports = app
