const connection = require ('../config/db');
const sha1 = require('sha1')
const userController = {};

//Ver el formulario de registro
//localhost:3000/users/register
//router.get('/register', userController.registerForm);
userController.registerForm =(req, res)=>{
    res.render('register');
}

//Localhost:3000/users/register
//Enviar info del usuario registrado a la bbdd
//router.post('/register', userController.register);
userController.register = (req, res) =>{
    const {name, mail, password} = req.body;
    const encPassword = sha1(password);
    let sql = `Insert into user (name, mail, password) Values ('${name}', '${mail}', '${encPassword}')`;
    connection.query(sql, (error, result)=>{
        if (error)throw error;
        //res.json(result)
        res.redirect('/users/login');
    })
}



//Ver el formulario de login 
//localhost:3000/users/login
//router.get('/login', userController.getLoginForm);
userController.getLoginForm =(req, res)=>{
    res.render('login');
}

//localhost:3000/users/login
// Comprobar usuario y contraseña son correctos
//router.post('/login', userController.login);
userController.login = (req, res)=>{
    const { mail, password } = req.body;
    let sql = `Select mail, password FROM user WHERE mail = '${mail}'`;
    //Mirar si el usuario realmente existe en la base de datos

    connection.query(sql, (error, result)=>{
        if (error)throw error;
        //si el usuario no existe, me devuelve un array vacio 
        //Devuelvo un estado de no autorizado 
        if(result.length === 0){// es lo mismo que poner: if(result.lengt){ == if(result.lengt > 0 ){
            return res.status(401).json('Unauthorized');
        }
        //Si llego aqui, el usuario existe
        //encripto la contraseña
        const encPassword = sha1(password);
// si son iguales: exito 
        if (result[0].password === encPassword){
            res.redirect('/products/all');
        } else {
            res.status(401).json('Email o contraseña no es correcto');
        }
    });

    //Mirar si el usuario con ese email tiene la contraseña correcta: 

}

module.exports = userController; 