const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController');
const verify = require ('../middleware/verify')

//localhost:3000/
router.get('/', controller.getTest);


//localhost:3000/createToken
router.post('/crearToken', controller.crearToken);

//localhost:3000/verificarToken
router.post('/verificarToken', verify, controller.verificarToken);



module.exports= router; 