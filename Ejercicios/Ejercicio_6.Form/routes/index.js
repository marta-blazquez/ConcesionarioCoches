const express = require('express');
const path = require('path');
const router = express.Router();


//localhost:3000/index
router.get('/',(req,res)=>{
    res.send('archivo ruta index');
})

//localhost:3000/index/verFormIndex
router.get('/verFormIndex',(req,res)=>{
    res.sendFile(path.join(__dirname + '/../html/index.html'));
})

//localhost:3000/index/recogerDatos
//re.body..... el nombre se name en el formulario
router.post('/recogerDatos', (req,res)=>{
    console.log(req.body)
    //let nombre= req.body.Nombre;
    //let apellido= req.body.Apellido;
    //let edad= req.body.Edad;
    //let colorPelo= req.body.ColorPelo;
    //let telefono= req.body.Telefono;

    res.send('Formulario enviado')
})

module.exports= router; 