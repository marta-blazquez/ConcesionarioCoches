var express = require('express');
var router = express.Router();

var connection = require('../config/db');

//localhost:3000/alumnos/todos
//ver todos los alumnos de la bbdd
router.get('/todos', (req, res)=>{

    //creamos variables con las querys
    let sql= `SELECT * FROM pruebasnode.alumnos`;
    
    connection.query(sql, (error, results)=>{
      if(error) throw error;
  
      console.log(results)
      res.send(results)
    })
  
  });


  //localhost:3000/alumnos/unAlumno/:id_user
  //Ver a un alumno
//variable dinamica, para recogerla de la url req.params.id_user
router.get('/unAlumno/:id_alumnos', (req, res)=>{
    let id_alumnos = req.params.id_alumnos;
    let sql = `Select * from alumnos where id_alumnos = ${id_alumnos}`;
    // result en singular xq solo viene un resultado
    connection.query(sql, (err, result)=>{
      if(err) {
        throw err
      }
      console.log(result)
      res.json(result)

    })
    
  })

  //Guardar datos en la bbdd
//localhost:3000/alumnos/guardar
  router.post('/guardar', (req, res)=>{

    let name= req.body.name;
    let surname= req.body.surname;
    let age_number= req.body.age_number;
    let eyecolor= req.body.eyecolor;
    let song= req.body.song;
  
    console.log(name);
    console.log(surname);
  
    let sql= `INSERT INTO alumnos (name,surname,age_number,eyecolor,song) VALUES ('${name}', '${surname}', ${age_number}, '${eyecolor}', '${song}')`;
    connection.query(sql, (error, result)=>{
      if(error) throw error;
      //res.send('ok')
      //me muestra un objeto 
      res.json(result)
    })
  
  })

  module.exports = router;


