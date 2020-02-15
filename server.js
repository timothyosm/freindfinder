var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app, path);

app.listen(PORT, ()=> {
    console.log(`Connected on port: ${PORT}`);
});

