let connection = require("../config/db.js")

let userController = {};

userController.readAll = (req, res)=>{
   let sql = `Select * from student`;
    connection.query(sql, (err, result)=>{
      if(err)throw err;
      //res.json(result);
      //para mostrar
      res.render('users', {result});
    })
}

userController.read = (req, res)=>{
    let id_student = req.params.id_student;
    let sql= `Select * FROM student WHERE id_student = ${id_student}`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
}

userController.create = (req, res)=>{
    let {name, surname, telephone_number, email, password} = req.body;
    let sql = `INSERT INTO student (name, surname, telephone_number, email, password) VALUES ('${name}', '${surname}', '${telephone_number}', '${email}', '${password}')`;
      connection.query(sql, (err, result) =>{
        res.status(200).json(result);
      })
};

userController.delete = (req, res)=>{
    let id_student = req.params.id_student;
    let sql = `Delete FROM student WHERE id_student = ${id_student}`;
    connection.query(sql,(err,result)=>{
      if(err)throw err;
      res.json(result)
    })
};

userController.update = (req, res)=>{
    let id_student = req.params.id_student;
    let {telephone_number} = req.body;
    let sql= `Update student SET telephone_number = '${telephone_number}' WHERE id_student = ${id_student}`;
  connection.query(sql, (err, result)=>{
    if(err)throw err;
    res.status(200).json(result)
  })
};

userController.getForm = (req,res)=>{
    let {name, surname, telephone_number, email, password} = req.body;
    let sql = `INSERT INTO student (name, surname, telephone_number, email, password) VALUES ('${name}', '${surname}', '${telephone_number}', '${email}', '${password}')`;
      connection.query(sql, (err, result) =>{
        res.render('form');
      })
};

module.exports = userController; 