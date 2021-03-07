var express = require('express');
var router = express.Router();
var connection = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//localhost:3000/query
router.get('/query', (req, res)=>{

  //creamos variables con las querys
  let sql= `SELECT * FROM pruebasnode.user`;
  //este metodo me permite hacer consultas

  //Metodo query se utiliza cuando queremos hacer una consulta la base de datos (a la tabla que especifiquemos en la query)
  //1º La variable que creo con la query
  //2º una arrow function que recibe dos parametros: el primero el posible erroe, y el segundo el posible resultado
  connection.query(sql, (error, results)=>{
    if(error) throw error;

    console.log(results)
    res.send(results)
  })

});


//localhost:3000/personas/:id_user
//variable dinamica, para recogerla de la url req.params.id_user
router.get('/personas/:id_user', (req, res)=>{
  //req.params.id_user
  let id_user = req.params.id_user;
  let sql = `Select * from user where id_user = ${id_user}`;
  // result en singular xq solo viene un resultado
  connection.query(sql, (error, result)=>{
    if(error) {
      throw error
    }
    console.log(result)
    res.render('user', {result})
  })
  
})

//post=>enviar datos a través de cuerpo del mensaje

router.post('/enviarDatos', (req, res)=>{

  let name= req.body.name;
  let surname= req.body.surname;

  console.log(name);
  console.log(surname);

  let sql= `INSERT INTO user (name, surname) VALUES ('${name}', '${surname}')`;
  connection.query(sql, (error, result)=>{
    if(error) throw error;
    res.send('ok')
  })

})

module.exports = router;
