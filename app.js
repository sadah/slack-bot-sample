var express = require('express');
var bodyParser = require('body-parser');
var hellobot = require('./hello');

// init node
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// hello world route
app.post('/hello', hellobot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('hellobot listening on port ' + port);
});
