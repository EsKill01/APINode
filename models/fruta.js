'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var frutaSchema = schema({
    nombre:String,
    color:String,
    temporada: Boolean
});

module.exports = mongoose.model('Fruta', frutaSchema);
