const express = require('express');
const router = express.Router();

//localhost:3000/user + la ruta que ponga en el primer parametro
router.get('/', (req, res)=>{
    res.send('ok, desde la ruta de usuario')
})

//localhost:3000/user/calzado
router.get('/calzado', (req, res)=>{
    res.send('ok, desde la ruta de usuario/calzado')
})

module.exports= router;