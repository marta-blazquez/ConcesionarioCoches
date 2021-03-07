const express = require('express');
const router = express.Router();

const path = require('path');

//localhost:3000/login
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/../html/login.html'));
})

//localhost:3000/login/recogerDatos/login
router.post('/recogerDatos/login', (req,res)=>{
    console.log(req.body)
    let email=req.body.email;
    let password= req.body.password
    let check= req.body.checkbox
    res.send('login enviado')
})

module.exports= router;