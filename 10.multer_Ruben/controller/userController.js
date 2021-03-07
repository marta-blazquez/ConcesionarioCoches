let connection = require('../config/db');

let userController = {};

// CRUD 

// READ
//aqui vamos a ver todos los usuarios de la base de datos
userController.viewHome = (req, res) => {

    //creo una query select TODO
    let sql = 'SELECT  * FROM user';

    //ejecutar la query
    connection.query(sql, (error, results) => {
        if (error) throw error;


        //renderizamos la vista home  Y envio el objeto results(todos los usuarios de la tabla user)
        res.render('home', { results })
    })

}



//READ ONE USER
//aqui vamos a buscar un solo usuario segun el PARAMETRO que nos llega de la URL (id_user)
userController.viewOneUser = (req, res) => {

    // creo una variable y recojo el parametro de la url  
    let id_user = req.params.id_user;

    //creo la query para buscar por un campo en concreto
    sqlUser = `SELECT * FROM user WHERE id_user = ${id_user}`;

    // Primero ejecuto la query que busca un usuario en concreto
    connection.query(sqlUser, (error, resultUser) => {
        if (error) throw error;


        let sqlProducts = `SELECT * FROM product WHERE id_user = ${id_user}`;

        //Despues ejecuto una query que busca TODOS los resultados de la tabla product del mismo usuario

        connection.query(sqlProducts, (error, resultProducts) => {
            if (error) throw error;

            //si no da error renderizo al vista user.ejs
            //envio a la vista user.ejs DOS objetos: el primero con el usuario y el segundo con TODOS los productos
            res.render('user', { resultUser: resultUser[0], resultProducts })

        })

    })
}



///CREAR  UN CONTROLADOR PARA VER EL FORMULARIO DE USER

userController.viewForm = (req, res) => {
    // renderizo el formulario del USUARIO
    res.render('form')
    
}



userController.saveUser= (req,res)=>{
    
    let image= req.file.filename;
    let {name,email,password} = req.body;

    let sql = `INSERT INTO user (name,email,password, image) VALUES ('${name}','${email}','${password}','${image}')`;

        connection.query(sql, (err,result)=>{
            if(err)throw err;
            res.redirect('/users')
        })
    
}



userController.editUser= (req,res)=>{
    let id_user= req.params.id_user;

    let sql=`SELECT * FROM user WHERE id_user=${id_user}`;


    connection.query(sql, (err,result)=>{
        if(err)throw err;

        res.render('editUser', { result :  result[0] });

    })
}


//localhost:3000/users/updateUser/:id_user
//router.post('/updateUser/:id_user', controller.updateUser);
userController.updateUser= (req,res)=>{
    let id_user= req.params.id_user;

    let {name,email}= req.body;

    let sql= `UPDATE user SET name='${name}', email='${email}' WHERE id_user = ${id_user}`;

    connection.query(sql,(err,result)=>{
        if(err)throw err;

        res.redirect('/users')
    })

}

module.exports = userController;