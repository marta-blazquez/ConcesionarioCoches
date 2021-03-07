var express = require('express');
var router = express.Router();
//recogida y tratamiento de archivos(imagenes)
const multer= require('multer');
const connection = require('../config/db');

    //la funcion diskStorage: es la funcion de CONFIGURACION DE MULTER
    // la funcion diskStorage de multer, recibe dos parametros
   const storage= multer.diskStorage({
    // /destination es la ruta de la carpeta donde yo voy a guardar la imagen
        destination: "public/imagenUsuario",
        // la configuracion del cambio de nombre de la imagen  + la extension de la imagen 
        filename: (_req,file,cb)=>{
            const extension= file.originalname.slice(
                file.originalname.lastIndexOf(".")
            )
            console.log(extension)
            cb(null, new Date().valueOf() + extension)
        }
    
    });
    //utilizo la configuracion con el metodo single: subir un archivo a la vez (recibe el name de la imagen)
        const upload = multer({storage}).single("avatar");

//middleware -> una funcion INTERMEDIA

const controller= require('../controller/userController');

// localhost:3000/users
router.get('/',controller.viewHome);

//localhost:3000/users/oneUser/:id_user
router.get('/oneUser/:id_user', controller.viewOneUser);
 

//localhost:3000/users/register
router.get('/register', controller.viewForm);

//localhost:3000/users/saveUser
router.post('/saveUser', upload ,controller.saveUser);

//localhost:3000/users/editUser/:id_user
router.get('/editUser/:id_user', controller.editUser);

//localhost:3000/users/updateUser/:id_user
router.post('/updateUser/:id_user', controller.updateUser); 

module.exports = router;
