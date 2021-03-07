 //requerimos la libreria de expres, porque vamos a utilizar un metodo de express q se llama routes
 const express = require('express');
 const path = require('path');
 //una funcion/metodo de la libreria express que crea las rutas y utilizar las rutas en el archivo principal
 //y la meto en una constante
 const router = express.Router();
 
 //creamos la ruta que queramos
 
 //localhost:3000/japo
 router.get('/japo', (req, res)=>{
     res.send('ruta japo')
 })
  
 //localhost:3000/japo/web
 router.get('/japo/web', (req, res)=>{
     res.sendFile(path.join(__dirname + '/html/japo.html'))
 })
 
 
 //exporto el modulo completo 
 module.exports= router; 