// Requiero express
const { Router } = require('express');
const express = require('express');
//Intancio el metodo router para poder crear rutas con express
const route = express.Router();

const multer = require('../middleware/multer')

//requiero el controlador
const viajeController = require ('../controllers/viajeController');


//localhost:3000 + parametro de ruta '/'
route.get('/', viajeController.getViaje);

//localhost:3000/viaje
route.post('/', viajeController.postViaje);

//localhost:3000/viaje/delete/:id
route.delete('/delete/:id_viaje', viajeController.delete);

//localhost:3000/viaje/:id
route.put('/viaje/:id', viajeController.update);
//localhost:3000/viaje/image
route.post('/image', multer.single('imagen'), viajeController.postViajeImage);

module.exports = route;