//Archivo que cre la configuracion y conexion con la base de datos

//requerimos la librería de mysql
var mysql      = require('mysql');
// Utilizamos un metodo llamado createConnection
//guardamos una variable el metodo (crea la conexion con una base de datos especifica)
var connection = mysql.createConnection({
    //host que utilizamos 
  host     : 'localhost',
  //user de la bbdd
  user     : 'root',
  password : '1Capitan_pirata',
  //Nombre de la base de datos
  database : 'crud_pegaso'
});
 
//Ejecuta la conexion (conectar) (es un callback)
connection.connect(
    function(error){
        if(error){
            throw error;
        }else{
            console.log("conexion correcta")
        }
    }
);
 
//Exportamos la conexion a la base de datos
module.exports = connection;