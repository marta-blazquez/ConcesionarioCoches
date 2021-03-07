var express = require('express');
var router = express.Router();
let connection = require('../config/db.js')


//La URL de esta ruta parte de ....localhost:3000/users --- hay q sumarle el parametro q nosotros pongamoes en la 
//ruta  

//CRUD completo
//create
//read 
//update
//delete 

//read:
//localhost:3000/users/all 
/* GET users listing. */
router.get('/all', (req, res) => {
  let sql = `Select * from student`;

  connection.query(sql, (err, result)=>{
    if(err)throw err;
    res.json(result);
  });

});



//Read: por parametro
//localhost: 3000/users/oneStudent/:id_student
router.get('/oneStudent/:id_student', (req, res)=>{

  let id_student = req.params.id_student;
  let sql= `Select * FROM student WHERE id_student = ${id_student}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});



// Create
//localhost:3000/users/createStudent
router.post('/createStudent', (req, res)=>{
  //recogemos los datos que me llegan desde el front a través de un metodo post. con el req.body
  let {name, surname, telephone_number, email, password} = req.body;
//creo la query e interpolo las variables que recojo del req.body
let sql = `INSERT INTO student (name, surname, telephone_number, email, password) VALUES ('${name}', '${surname}', '${telephone_number}', '${email}', '${password}')`;
  connection.query(sql, (err, result) =>{
    res.status(200).json(result);
  })
});

//delete
//localhost:3000/users/deleteStudent/:id_student

router.delete('/deleteStudent/:id_student', (req, res)=>{
  let id_student = req.params.id_student;
  //crear una query que elimine un usario (student) por id (segun su id_student)
let sql = `Delete FROM student WHERE id_student = ${id_student}`;

  connection.query(sql,(err,result)=>{
    if(err)throw err;
    res.json(result)
  })
})


//UPDATE

//localhost:3000/users/updateStudent/:id_student
router.put('/updateStudent/:id_student', (req, res)=>{
  let id_student = req.params.id_student;
  let {telephone_number} = req.body;

  let sql= `Update student SET telephone_number = '${telephone_number}' WHERE id_student = ${id_student}`;
connection.query(sql, (err, result)=>{
  if(err)throw err;
  res.status(200).json(result)
})
})

module.exports = router;
