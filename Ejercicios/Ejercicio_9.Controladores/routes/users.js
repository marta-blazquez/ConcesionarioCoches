var express = require('express');
var router = express.Router();
const userController = require ('../controller/userController');

router.get('/all', userController.readAll)

router.get('/oneStudent/:id_student', userController.read)

router.post('/createStudent', userController.create)

router.delete('/deleteStudent/:id_student', userController.delete)

router.put('/updateStudent/:id_student', userController.update)

//ver el formulario
//localhost:3000/student/form
router.get('/form', userController.getForm)

module.exports = router;

