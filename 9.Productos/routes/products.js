
var express = require('express');
var router = express.Router();
const productController = require ('../controller/productController');

 
//localhost:3000/products/delete/:id_products
router.get('/delete/:id_product', productController.delete)

//localhost:3000/products/all
router.get('/all', productController.seeAll)

//localhost:3000/products/form
router.get('/form', productController.getForm) 

//localhost:3000/products/updateForm/:id_product
router.get('/updateForm/:id_product', productController.getUpdateForm)



//localhost:3000/products/:id_product  
router.get('/:id_product', productController.seeOne)


//localhost:3000/products/new
router.post('/new', productController.newOne)

//localhost:3000/products/update/:id_product
router.post('/update/:id_product', productController.update)



module.exports = router;