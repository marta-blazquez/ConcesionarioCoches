let connection = require('../config/db');

let usercontroller={};

//Ver todos los usuarios
usercontroller.viewHome = (req, res)=>{
    let sql = `SELECT * FROM user`;

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        res.render('home', {results})
    })
    
}

//READ ONE USER (ver un solo usuario, según el parámetro que nos llega de la URL (id_user))
usercontroller.viewOneUser = (req,res)=>{
    let id_user=req.params.id_user;
    sqlUser = `SELECT * FROM user WHERE id_user = ${id_user}`;
    connection.query(sqlUser, (error, resultUser)=>{
        if(error)throw error;

        //Query anidada
        let sqlProduct =`SELECT * FROM  product WHERE id_user = ${id_user}`;
        connection.query(sqlProduct, (error, resultProducts)=>{
            if(error)throw error;

         res.render('user', {resultUser:resultUser[0],  resultProducts})   

        }) 
    })
}

//VER FORMULARIO DE USERS

usercontroller.viewForm = (req, res)=>{
    res.render('form')
}

//Guardar registro de un usuario
usercontroller.saveUser=(req, res)=>{
    let image = 'aqui va la imagen';
    let {name, email, password} = req.body;
    console.log('-----------------------')
    let sql = `INSERT INTO user (name, email, password, image) VALUES ('${name}', '${email}', '${password}', '${image}')`;

    connection.query(sql, (err, result)=>{
        if(err)throw err;
        res.redirect('/users')
    })
}

usercontroller.editUser=(req, res)=>{
    let id_user=req.params.id_user;

    let sql=`SELECT * FROM user WHERE id_user=${id_user}`;

    connection.query(sql, (err, result)=>{
        if(err)throw err;

        res.render('editUser', {result : result[0] });
    })
}

usercontroller.updateUser=(req, res)=>{
    let id_user=req.params.id_user;

    let{name, email, password}= req.body;

    let sql= `UPDATE user SET name= '${name}', email='${email}', password='${password}' WHERE id_user = ${id_user}`;

    connection.query(sql,(err,result)=>{
        if(err)throw err;
        res.redirect('/users')
    })

}

module.exports=usercontroller;