const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

 
//requiero/importo el archivo de las rutas 
//el nombre se lo pongo yo, xo q sea intuitivo
const indexRoutes = require('./routes/index')

//requiero el archivo de ruta user
const userRoutes = require('./routes/user')
//Vamos a crear un archivo que controle las rutas
const productRoutes = require('./routes/product')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//ruta principal
//utilice (ruta: localhost:3000/)
//ejecute el archivo index.js de la carpeta routes
app.use('/', indexRoutes)

//ejecute el archivo user.js
//localhost:3000/user
app.use('/user', userRoutes)
app.use('/product', productRoutes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
