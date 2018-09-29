var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongooseConnect=require('./database/config');
var session=require("express-session");
var MongoStore=require("connect-mongo")(session);

var app = express();
app.use(session({
    secret: "fznKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,expires: 1000*60*60*24*14 },
    store: new MongoStore({ mongooseConnection: mongooseConnect }),
}));


var index=require('./controller/index');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/",index)

app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
