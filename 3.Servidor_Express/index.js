// requiriendo la libreroa de express, para usar sus funcionanlidades 
const express = require('express')
// Instanciamos la función / ejecutamos la funcion
const app = express()
//Indicamos el puerto que vamos a utilizar 
const port = 3000

//ruta,solicitud/ recurre a traves de la url 
// metodo de http get
//como primer parametro recibe la direccion/ruta
//como segundo recibe una función anonima
//http://localhost:3000
app.get('/', (req, res) => {
    // responder/ejecutar en el navegador, send envia un string 
  res.send('Hello World!')
})

//http://localhost:3000/casa
app.get(
    '/casa', (req, res) => {
    res.send('Hello World two!')
  })



  //get  -> peticion 
  //localhost:3000/producto/:variable
  //esta variable es una variable dinámica
  app.get('/producto/:variable', (req, res) =>{
//peticion _> request
//params -> parametro de la url
//pide a la url un parametro
    console.log(req.params)
    //respuesta al navegaor con un string
    res.send('producto');
  })


  //localhost:3000/marca/:color
  app.get('/marca/:color', (req, res) => {
    //para verlo en la consola
    console.log(req.params)
    res.send('ok')
  })

  //localhost:3000/condicion/:color
  //si el color que llega de la url es azul, entonces enviar un string con el color es azul
  //si el color no fuera azul enviar un string con el color no es azul
  app.get('/condicion/:color', (req, res)=> {
    console.log(req.params.color)
    let color = req.params.color

    if(req.params.color == "azul"){
      res.send('El color es azul')
    }
    else{
      res.send('El color es' + color)
    }
  })



  //COMO recoger mas de un parametro de la url 
  //localhost:3000/parametros/:parametroUno/:parametroDos
  app.get('/parametros/:parametroUno/:parametroDos', (req,res) =>{
    console.log(req.params)
    res.params.parametroUno
    req.params.parametroDos
    
    res.send('ok')
  })

  // escucha un puerto y arranca el servidor 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})