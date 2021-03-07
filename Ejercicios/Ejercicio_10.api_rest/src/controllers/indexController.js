const db = require('../config/connectionDB');
//requiero sha1 para encriptar la contraseña
const sha1 = require('sha1')

const nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e95e05c036ca3b",
      pass: "a80479a97ee8d3"
    }
  });

class IndexController{

    getUser(req, res){
        const {id} = req.params;
        let sql = `Select * from user`;
        db.query(sql, (err, results)=>{
            if(err)throw err;
            res.status(200).json(results)
        })

    }

    postUser(req, res){
        const { name, surname, email, password}= req.body;
        let pass = sha1(password);
        let sql = `INSERT into user (name, surname, email, password) VALUES ('${name}', '${surname}', '${email}', '${pass}')` 
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result, message:'ok'})
        });
    };

    deleteUser(req, res){
        let id = req.params.id;
        let sql = `Delete FROM user Where id_user = ${id}`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({message:'El usuario ha sido borrado con exito'})
        })
    }

    updateUser(req, res){
        let {id} = req.params; 
        let {name, surname, email} = req.body;
        let sql = `Update user SET name = '${name}', surname = '${surname}', email = '${email}' WHERE id_user = ${id}`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result})
        });
    };

    postUserImage(req, res){
        const img_user = req.file.filename;
        const { name, surname, email, password}= req.body;
        let pass = sha1(password);
        let sql = `INSERT into user (name, surname, email, password) VALUES ('${name}', '${surname}', '${email}', '${pass}')` 
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result, message:'ok'})
        });
    };

    sendMail(req, res){
        let info =({
            from: 'd709a92e4b-5d8a0a@inbox.mailtrap.io', // sender address
            to: 'm.blazquezcalderon@gmail.com', // list of receivers
            subject: "Hello ✔", // Subject line
            //text: "Hello world?", // plain text body
            html: `
                    <h1>Hello, soy un usuario</h1>
                    <p>name: Morgan</p>
                    <p>race: unknow</p>`
        })
        transport.sendMail(info, (err, result)=>{
            if(err)throw err;
            res.json({message:'email enviado'})
        })
    }



};

module.exports = new IndexController;