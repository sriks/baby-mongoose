var LISTEN_PORT = 3001;
var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users');
var db = require('./db.js');
var baby = require('../index.js');
var app = express();

db.setup();

app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));

app.use('/simple/users', baby.simple.create(db.User, function(req, res, next) {
  res.status(201).json(res.locals.result);  
}));

// A set of middlewares to execute.
app.post('/middleware/users', 
    baby.middleware.create(db.User),
    function(req, res, next) {
        res.status(201).json(res.locals.result);     
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      console.log("error handler:"+err);
      console.log("stack trace:"+err.stack);

      console.log(err);
      res.status(err.status || 500);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

app.listen(LISTEN_PORT, function() {
  console.log('Listening at http://localhost:'+LISTEN_PORT);
});

