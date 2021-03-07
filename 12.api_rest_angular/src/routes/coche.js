//requiero express
const { Router } = require('express');
const express = require('express');
//Intancio el metodo router para poder crear rutas con express
const router = express.Router();

//requiero el controlador
const cocheController = require ('../controllers/cocheController');

//ENDPOINTS:

//localhost:3000/coches         ---- Ver todos los coches
router.get('/', cocheController.getCoches);

//localhost:3000/coches         ---- Añadir un coche
router.post('/', cocheController.postCoches);

//localhost:3000/coches/delete/:id        ---- Borrar 
router.delete('/delete/:id', cocheController.delete);

//localhost:3000/coche/update/:id       ----- Actualizar
router.put('/update/:id', cocheController.update);

module.exports = router;
