// Requiero express
const { Router } = require('express');
const express = require('express');
//Intancio el metodo router para poder crear rutas con express
const route = express.Router();

const multer = require('../middleware/multer')

//requiero el controlador
const petController = require('../controllers/petController');

//ENDPOINT (una ruta q hace algo, indepencientemente del metodo q se usa.  A las rutas se les llama endpoint)

//localhost:3000 + parametro de ruta '/'
route.get('/', petController.getPet);

//localhost:3000/pets/nueva
route.post('/nueva', multer.single('image_pet'), petController.postPet);

//localhost:3000/pet/:id
route.delete('/pets/:id', petController.deletePet);

//localhost:3000/pet/:id
route.put('/pet/:id', petController.updatePet);
//localhost:3000/pet/image
route.post('/pet/image', multer.single('img_pet'), petController.postPetImage);





//esporto el modulo route
module.exports= route;

