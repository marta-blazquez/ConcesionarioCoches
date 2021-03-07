var express = require('express');
var router = express.Router();
//recogida y tratamiento de archivos(imagenes9)
const multer = require('multer');

    //la funcion diskstorage de multer (es la función de configuración del multer) recibe dos parametros
    //(destination). multer es un objeto que dentro tiene varias funciones
    const storage = multer.diskStorage({
        destination: "public/images", 
        //_req lo recoge de express, recoge la imagen y el nombre
        filename: (_req,file,cb)=>{
            const extension = file.originalname.slice(
                file.originalname.lastIndexOf(".")
            )
            console.log(extension)
            cb(null, new Date().valueOf() + extension)
        },
        
    });
        const upload = multer({storage}).single("avatar")

    //midelware => una funcion intermedia

const controller=require ('../controller/usercontroller');

//localhost:3000/users
router.get('/', controller.viewHome);


//localhost:3000/users/oneUser/:id_user
router.get('/oneUser/:id_user', controller.viewOneUser);

//localhost:3000/users/register
router.get('/register', controller.viewForm);

//localhost:3000/users/saveUser
router.post('/saveUser', upload, controller.saveUser);

//localhost:3000/users/editUser/:id_user
router.get('/editUser/:id_user', controller.editUser);

//localhost:3000/users/editUser/:id_user
router.post('/updateUser/:id_user', controller.updateUser);

console.log(multer.diskStorage)




module.exports = router;
