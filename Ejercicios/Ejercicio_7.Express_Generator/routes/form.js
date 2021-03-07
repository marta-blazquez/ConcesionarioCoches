var express = require('express');
var router = express.Router();

//Muestra el formulario
//localhost:3000/form
router.get('/', function(req, res) {
    res.render('form', { 
       // title: 'Hola',
       
      });
  });


//localhost:3000/form/recogerDatos
router.post('/recogerDatos', (req,res)=>{
  console.log(req.body)
  let nombre=req.body.nombreDeLaEmpresa
  let dominio= req.body.dominio
  let colores= req.body.coloresCorporativos
  let telefono= req.body.telefono
  let direccion= req.body.direccion
  let ceo= req.body.ceo
  let cto= req.body.cto
  let front= req.body.frontDeveloper
  let ux= req.body.uxUi
  res.send('formulario enviado')
})


module.exports = router;