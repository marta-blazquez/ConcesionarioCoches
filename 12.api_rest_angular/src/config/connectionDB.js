//requerimos la libreria mysql
const mysql = require('mysql');
//requerimos la configuarcion de la bbdd
const config = require('./db');

const connection = mysql.createConnection(config.db);

connection.connect((err, connection) => {
    if (err) {
        throw err;
    };
    console.log('Conexion correcta')
});

module.exports= connection;