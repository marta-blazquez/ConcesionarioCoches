//requerimos la libreria de expres, porque vamos a utilizar un metodo de express q se llama routes
const express = require('express');
//una funcion/metodo de la libreria express que crea las rutas y utilizar las rutas en el archivo principal
//y la meto en una constante
const router = express.Router();

//creamos la ruta que queramos

//localhost:3000/
router.get('/', (req, res)=>{
    res.send('ok desde el archivo ruta')
})


//exporto el modulo completo 
module.exports= router;