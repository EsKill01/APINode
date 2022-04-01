'use strict'

const fruta = require('../models/fruta');
var model = require('../models/fruta');

function Pruebas(req, res){
    res.status(200).send({
        message: 'esta es una prueba con mi mongo db'
    });
}

function GetFrutas(req, res){
    model.find({}).sort({'_id':-1}).exec((err, frutas) => {
        if(err){
             res.status(500).send({
                    message: 'Error en el servidor'
                });
        }
        else{
            if(frutas){
                res.status(200).send({
                    frutas
                })
            }
            else {
                res.status(400).send({
                    message: 'No hay frutas'
                });
            }
        }
    })
}

function UpdateFruta(req, res){
    var frutaId = req.params.id;
    var update = req.body;

    model.findByIdAndUpdate(frutaId, update, {new:true}, (err, frutaUpdate) =>{

        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }
        else {
            if (frutaUpdate) {
                res.status(200).send({
                    frutaUpdate
                })
            }
            else {
                res.status(400).send({
                    message: 'La fruta no se pudo actualizar'
                });
            }
        }
    });
}

function GetFruta(req, res){

    var frutaId = req.params.id;

    model.findById(frutaId).exec((err, fruta) => {
     

        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }
        else {
            if (fruta) {
                res.status(200).send({
                    fruta
                })
            }
            else {
                res.status(400).send({
                    message: 'No existe la frutas'
                });
            }
        }

    }) ;
}

    




function SaveFruit(req, res){
        var frut = new model();
        var pass = true;

        var params = req.body;

        if (params.nombre){
            frut.nombre = params.nombre;
        }
        else{
            pass = false;
        }

        if (params.color){
            frut.color = params.color;
        } 
        else {
            pass = false;
        }

        if (params.temporada){
            frut.temporada = params.temporada;
        } 
        else {
            pass = false;
        }



        frut.save((err, frutaStored) =>{
            
            if (!pass){
                res.status(500).send({
                    message: 'Uno o mas campos son requeridos'
                });
            }

            if (err){
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            }
            else if (frutaStored){

               
                    res.status(200).send({
                        fruta: frutaStored
                    })
                
            }
            else{
                res.status(500).send({
                    message: 'Error a la hora de almacenar el registro en la DB'
                });
            }
        })
}

function DeleteFruta(req, res){
   var frutaId = req.params.id;
   
   model.findByIdAndDelete(frutaId, (err, frutaRemoved) =>{

       if (err) {
           res.status(500).send({
               message: 'Error en el servidor'
           });
       }
       else {
           if (frutaRemoved) {
               res.status(200).send({
                  fruta: frutaRemoved
               })
           }
           else {
               res.status(400).send({
                   message: 'No existe la frutas'
               });
           }
       }
   })
}

module.exports = {
    Pruebas,
    SaveFruit,
    GetFrutas,
    GetFruta,
    UpdateFruta,
    DeleteFruta
};