//libreria express 
const express = require('express')
//libreria path
//const path = require('path');

//Ejecutamos la funcion 
const app = express()
//indico el puerto q usar 
const port = 3000

app.use(express.static(__dirname + '/public'));

//Para requerir otros archivos
const indexRouter = require('./routes/index')
const japoRouter = require('./routes/japo')
//const productRoutes = require('./routes/product')

app.use('/', indexRouter)
app.use('/japo', japoRouter)
//app.use('/product', productRoutes)

// esto es una ruta estática a la carpeta pubic (dentro hay css, imagenes, html)
//app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

 
