// Requiero express
const { Router } = require('express');
const express = require('express');
//Intancio el metodo router para poder crear rutas con express
const route = express.Router();

const multer = require('../middleware/multer')

//requiero el controlador
const indexController = require('../controllers/indexController');

//ENDPOINT (una ruta q hace algo, indepencientemente del metodo q se usa.  A las rutas se les llama endpoint)

//localhost:3000 + parametro de ruta '/'
route.get('/', indexController.getUser);

//localhost:3000/user
route.post('/user', indexController.postUser);

//localhost:3000/user/:id
route.delete('/user/:id', indexController.deleteUser);

//localhost:3000/user/:id
route.put('/user/:id', indexController.updateUser);
//localhost:3000/user/image
route.post('/user/image', multer.single('img_user'), indexController.postUserImage);

route.post('/user/email', indexController.sendMail);
 


//esporto el modulo route
module.exports= route;
