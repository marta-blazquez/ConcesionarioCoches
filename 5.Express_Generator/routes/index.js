var express = require('express');
var router = express.Router();

//localhost:3000/
//así viene por defecto: 
//router.get('/', function(req, res, next) {
 /* res.render('index', { title: 'Express' });
});*/

router.get('/',(req, res) =>{
  //render pinta en el navegador un archivo ejs 
  //'index' es el nombre del archivo q quiero renderizar 
  //render puede recibir dos parámetros:
  //primero la vista (archivo ejs que queremos mostrar)
  //segundo: una variable (un objeto) que vamos a enviar a el ejs para utilizarla
  //pueden ser string, numeros, funciones, boolean...
  // este objeto se envia al front, concretamente al index, a la vista que quiero mostrar
  res.render('index', { title: 'Express macarrones' });
});

module.exports = router;
