var express = require('express');
var router = express.Router();

let controller= require('../controller/productController');

//localhost:3000/products/
router.get('/', controller.viewAllProducts );



//localhost:3000/products/saveProduct/:id_user
router.post('/saveProduct/:id_user', controller.saveProduct );

module.exports = router;
