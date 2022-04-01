'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

// cargar rutas

var frutar_route = require('./Routes/FrutaRoute');


// body parse

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cofingurar cors

//rutas

app.use('/api', frutar_route);

module.exports = app;