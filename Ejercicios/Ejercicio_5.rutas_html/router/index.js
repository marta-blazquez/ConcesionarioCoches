 //requerimos la libreria de expres, porque vamos a utilizar un metodo de express q se llama routes
 const express = require('express');
  //una funcion/metodo de la libreria express que crea las rutas y utilizar las rutas en el archivo principal
 //y la meto en una constante
 const router = express.Router();
 const path = require('path');

 
 //creamos la ruta que queramos
 
 //localhost:3000/
 router.get('/', (req, res)=>{
     res.send('ruta index')
 })
 
 //localhost:3000/index
 router.get('/index', (req, res)=>{
     res.sendFile(path.join(__dirname + '/index.html'))
 })


 
 //exporto el modulo completo para poder verlas/usarlas en el archivo principal 
 module.exports= router;