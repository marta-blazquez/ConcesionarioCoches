
const express = require('express');
const path = require('path');
const router = express.Router();

//localhost:3000/product/calzado + la ruta que ponga en el primer parametro
router.get('/calzado', (req, res)=>{
    res.send('ok, estás en la ruta product/calzado')
})

//localhost:3000/product/pantalon
router.get('/pantalon', (req, res)=>{
    res.send('ok, estás en la ruta product/pantalon')
})

//localhost:3000/product/reloj
router.get('/reloj', (req, res)=>{
    res.send('ok, estás en la ruta product/reloj')
})


//localhost:3000/product/variable/:marca
//se debe cambiar la ruta URL de la variable porque osino
//todo url despues del principal lo pisa y no se ven lo siguientes asi que se debe colocar 
///variable/:marca
router.get('/variable/:marca',(req,res) => {
    console.log(req.params.marca)
    res.send('product / marca')
})
 
//localhost:3000/product/verFormulario
router.get('/verFormulario',(req,res) =>{
    res.sendFile(path.join(__dirname + '/../html/form.html'));
})

//localhost:3000/product/enviarFormulario
router.post('/enviarFormulario', (req,res)=>{
    console.log(req.body)
    res.send('formulario enviado')
})


//Aqui recojo los datos del formulario, 
//localhost:3000/product/envioDeProducto
router.post('/envioDeProducto', (req,res)=>{
    //como recojo los datos de un formulario
    console.log(req.body)
    let nombre=req.body.nombreProducto // const color= req.body.color // var forma= req.body.forma (se puede definir de varias formas)
    res.send('formulario de producto enviado')
})


module.exports= router;