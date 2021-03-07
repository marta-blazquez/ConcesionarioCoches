const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController');
const verify = require ('../middleware/verify')

//localhost:3000/
router.get('/', controller.getTest);


//localhost:3000/login
router.post('/login', controller.login);

//comprobar que el usuario existe
//localhost:3000/profile
router.get('/profile', verify, controller.getUserDates)

module.exports= router; 