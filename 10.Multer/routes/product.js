var express = require('express');
var router = express.Router();

const multer = require('multer');

const controller=require ('../controller/productcontroller');

//localhost:3000/product
router.get('/', controller.viewProducts);

//localhost:3000/product/saveProduct
router.post('/saveProduct/:id_user', controller.saveProduct);


module.exports = router;