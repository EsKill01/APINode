'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;


mongoose.connect('mongodb://localhost:27017/cooker')
    .then(() => {
        console.log('La conexion a mongo db se ha completado correctamente');

        app.listen(port, ()=>{
            console.log('El servidor esta corriendo el localhost:' + port);
        })
    }).catch(err => console.log('Error: '+ err));