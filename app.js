const express = require('express');
const parser = require('body-parser');
const app = express();
const routes = require('./routes/index');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000
app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
