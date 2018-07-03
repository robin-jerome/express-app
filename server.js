'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    "Server up!"
  );
});

app.listen(8080);
module.exports = app;
