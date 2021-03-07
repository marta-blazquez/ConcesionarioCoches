var express = require('express');
var router = express.Router();
const indexController = require ('../controller/indexController');

//Aqui vamos a tener las rutas: el metodo http que se va a ejecutar y dos cosas 
//(el parametro de la url y el controlador que se va a ejecutar)

//localhost:3000/home

//Aqui ejecutamos el metodo hhtp get y utilizamos el metodo viewhome del 
//controlador indexController.js
router.get('/home', indexController.viewHome);

//Crear una ruta get "user" y crear un metod "viewuser" 
//y que mande un string "eeeeee"

router.get('/user', indexController.viewUser);

router.get('/alumno', indexController.alejandro);

router.get('/select', indexController.viewUsers);

module.exports = router;
