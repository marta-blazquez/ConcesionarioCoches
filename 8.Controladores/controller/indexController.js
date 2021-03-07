
// en este archivo vamos a tener la lógica 
let connection = require("../config/db.js")
//estoy creando un objeto vacio
//dentro metere diferentes metodos 
let indexController = {};

    //dentro de ese objeto meto funcionalidad 
    indexController.suma = (req, res) =>{
        function suma(a, b){
            return a + b;
        }
        res.send('respond with a source');
    };

    indexController.resta = (req, res) =>{
        res.send('respond with a source');
        function suma(a, b){
            return a - b;
        }
    }
    

    //Guardamos en el objeto vacio 
    indexController.viewHome = (req, res) =>{
        res.send('respond with a source');
    }

    indexController.viewUser = (req, res) =>{
        res.send('eeeeeee')
    }

    indexController.alejandro = (req, res) =>{
        res.send('Alejandro')
    }

    //metodo para hacer consulta a la base de datos
    indexController.viewUsers =  (req, res)=>{
        let sql = `SELECT * FROM alumnos`;
        connection.query(sql, (err, result)=>{
            if(err)throw err;
            res.send(result);
        }) 
    }

//Exportamos el modulo con el objeto indexController con todos sus metodos
//Exportamos el indexControler, para usar ese objeto(controlador) y usarlo en otro sitio
module.exports = indexController; 
// igual let indexController = {verPantallaPrincipal}


/*
let indexController = {
    suma: function (a, b){return a + b},
    resta: function (a, b){return a - b},
}
*/