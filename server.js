var port = process.env.PORT || 8080;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send(
    "Server up!"
  );
});

app.listen(port);
module.exports = app;
