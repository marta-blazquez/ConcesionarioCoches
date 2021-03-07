var express = require('express');
const userController = require('../controller/userController');
var router = express.Router();

// ------> Registro <-------
//Ver el formulario de registro 
//localhost:3000/users/register
router.get('/register', userController.registerForm);

//Localhost:3000/users/register
//Enviar info del usuario registrado a la bbdd
router.post('/register', userController.register);


// ------> Login <-------
//Ver el formulario de login 
//localhost:3000/users/login
router.get('/login', userController.getLoginForm);

//localhost:3000/users/login
// Comprobar usuario y contraseña son correctos
router.post('/login', userController.login);


module.exports = router;
