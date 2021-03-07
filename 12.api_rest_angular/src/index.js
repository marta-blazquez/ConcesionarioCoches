// Requiero expresss
const express = require ('express');
const app = express(); 

//utilizamos body_parser para poder recoger los datos del body(req.body)
const bodyParser = require('body-parser');

//Usaremos mientras estamos en produccion, nos dará informacion adicional a la q ya teniamos sobre lo que estamos ejecutando
//me dice el metodo q he ejecutado, la direccion de la url q ha ejecutado; el codigo de estado (200: todo ok),el tiempo que tarda en ejecutarse.
const morgan = require('morgan');
//Permite enviar datos al front (cualquier front/cualquier cliente)
const cors = require('cors');
let path = require('path');

require('dotenv').config();
console.log(process.env.DB_HOST)

//requiero las rutas 
const cocheRouter= require('./routes/coche.js');
const viajeRouter=require('./routes/viaje.js');

//configuracion de bodyparser para recoger datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
//localhost:3000
app.use('/coches', cocheRouter);
app.use('/viaje', viajeRouter);


//Ejecuto el metodo listen para levantar el servidor
app.listen(3000, ()=>{
    console.log('Express running 3000')
});