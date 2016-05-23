var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/api');

// Mongoose
mongoose.connect('mongodb://localhost/rest_test');

// Express
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

//Routes
app.use('/api', routes);

//Start server
app.listen(3000);
console.log('running on port 3000');

