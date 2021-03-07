const express= require('express');
const router= express.Router();
const controller= require('../controller/indexController');
const verifyToken= require('../middleware/verify');


//localhost:3000/
router.get('/',controller.getTest);

//localhost:3000/
router.post('/login', controller.login);


//localhost:3000/profile
router.get('/profile',verifyToken, controller.getUserDates)


module.exports= router;