#!/usr/bin/env node

var log = require('winston').loggers.get('server');
var path = require('path');
var express = require('express');
var app = express();

// setup transparent jsx requires
require("node-jsx").install();

var config = {
  port: 8000
};

// views
app.set('views', __dirname);
app.set('view engine', 'ejs');

// routing and static files
require('app/routes').init(app);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(config.port, function (err) {
  log.info("Server started; listening on port " + config.port);
});
