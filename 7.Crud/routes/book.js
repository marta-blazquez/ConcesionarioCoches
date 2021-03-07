var express = require('express');
var router = express.Router();
let connection = require('../config/db.js')


//READ
//localhost:3000/book/all 
router.get('/all', (req, res) => {
    let sql = `Select * from book`;
  
    connection.query(sql, (err, result)=>{
      if(err)throw err;
      res.json(result);
    });
  
  });
  
  
  
  //Read: por parametro
  //localhost: 3000/book/oneBook/:id_book
  router.get('/oneBook/:id_book', (req, res)=>{
  
    let id_book = req.params.id_book;
    let sql= `Select * FROM book WHERE id_book = ${id_book}`;
  
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  
  
  // Create
  //localhost:3000/book/createBook
  router.post('/createBook', (req, res)=>{
    //recogemos los datos que me llegan desde el front a través de un metodo post. con el req.body
    let {title, description, author, genre} = req.body;
  //creo la query e interpolo las variables que recojo del req.body
  let sql = `INSERT INTO book (title, description, author, genre) VALUES 
  ('${title}', '${description}', '${author}', '${genre}')`;
    connection.query(sql, (err, result) =>{
      res.status(200).json(result);
    })
  });
  
  //delete
  //localhost:3000/book/deleteBook/:id_book
  
  router.delete('/deleteBook/:id_book', (req, res)=>{
    let id_book = req.params.id_book;
    //crear una query que elimine un usario (student) por id (segun su id_student)
  let sql = `Delete FROM book WHERE id_book = ${id_book}`;
  
    connection.query(sql,(err,result)=>{
      if(err)throw err;
      res.json(result)
    })
  })
  
  
  //UPDATE
  
  //localhost:3000/book/updateBook/:id_book
  router.put('/updateBook/:id_book', (req, res)=>{
    let id_book = req.params.id_book;
    let {title, description, author, genre} = req.body;

  
    let sql= `Update book SET title = '${title}', description = '${description}', author = '${author}', genre = '${genre}' WHERE id_book = ${id_book}`;
  connection.query(sql, (err, result)=>{
    if(err)throw err;
    res.status(200).json(result)
  })
  })
  
  module.exports = router;