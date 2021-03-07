const mysql = require('/mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1Capitan_pirata',
  database : 'controller'
});
 

connection.connect(
    function(error){
        if(error){
            throw error;
        }else{
            console.log("conexion correcta")
        }
    }
);
 

module.exports = connection;