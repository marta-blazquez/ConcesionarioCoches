const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

//requerimos los archivos de ruta
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//usamos la ruta
//cuando se le haga una peticion al servidor con las rutas: 
//localhost:3000/
app.use('/', indexRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});