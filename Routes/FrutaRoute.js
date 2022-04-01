'use strict'

var express = require('express');
var frutaController = require('../Controllers/FrutaController');

var api = express.Router();

api.get('/pruebas', frutaController.Pruebas);
api.post('/fruta', frutaController.SaveFruit);
api.get('/frutas', frutaController.GetFrutas);
api.get('/fruta/:id', frutaController.GetFruta);
api.put('/fruta/:id', frutaController.UpdateFruta);
api.delete('/fruta/:id', frutaController.DeleteFruta);

module.exports = api;