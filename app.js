var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var Donut = require("./models/donut");
var logger = require('morgan');
require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var donutsRouter = require('./routes/donuts');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/selector', selectorRouter);
app.use('/donuts', donutsRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Get the default connection 
var db = mongoose.connection;

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

async function recreateDB() {
  // Delete everything 
  await Donut.deleteMany();

  let instance1 = new
    Donut({
      donut_Name: "sugar", shop: 'Star',
      price: 5.4
    });
  let instance2 = new
    Donut({
      donut_Name: "salted", shop: 'McD',
      price: 2.4
    });
  let instance3 = new
    Donut({
      donut_Name: "cofee", shop: 'dunkin',
      price: 3.4
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("secound object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Thrid object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
