//requiero la libreria de express, para usar sus funcionalidades.
const express = require('express');
const path = require('path');

// Instanciamos la funcion / ejecutamos la funcion 
const app = express();

//Indico el puesto q voy a usar
const port = 3000;

//enlazo el archivo de css e images
//indicamos q vamos a tener una ruta estática que va a contener archivos que vamos a utilizar 
//La creamos para poder accede desde cualquier parte de nuestro servidor web a los archivos que indica la carpeta css o images
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

//Método get se introduce una ruta en el navegador (accion a través del navegador).
//app.get + dos parametros (una ruta + (req, res))

//http://localhost:3000/
app.get('/', (req, res) => {
  //send: enviar un texto
  res.send('Soy la primera ruta')
});

//http://localhost:3000/segunda 
app.get('/segunda', (req, res) => {
  res.send('Soy la segunda ruta')
});

//http://localhost:3000/coches 
app.get('/coches', (req, res) => {
  res.send('Ford Mustang')
});

//unimos la libreria path + el metodo join
//como path viene instalado no hay q instalarlo, pero si hay que indicar que la quiero importar, 
//por eso lo anoto en la linea 3.

//http://localhost:3000/home 
app.get('/home', (req, res) => {
  //Imprimir en el en el navegador mi index.html // ejecuto una ruta y ejecuto un archivo
  //dirname es la ruta de donde se encuentra el archivo. 
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Escucha un puerto y arranca el servidor 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})