const jwt = require('jsonwebtoken')
const db = require('../config/connectionDB');

class IndexController{

    getTest(req, res){
        let sql = `SELECT * from user`;
        db.query(sql, (err, results)=>{
            if(err)throw err;
            res.status(200).json(results)
    })
    }

   crearToken(req, res){
        const {email, password} = req.body;
        console.log(req.body)
        let result = {
            name: "Marta",
            email: "marta@mail.com",
            age: 36,
            address: 'Málaga'
        }
        //utilizo la libreria jwt con el metodo sign (que expire en 24 hora (seg * min * horas))
        //const token = jwt.sign( {name, password}, secret, {expiresIn= 60 * 60 * 24} )
        //Como primer parametro los datos q van a formar parte del playload: el cuerpo del token (la parte intermedia del token)
        //como segundo parametro la clave secreta con la que se va a crear el token y que sera necesarioa desprues comprobar el token 
        const token = jwt.sign( {result}, process.env.PASS_TOKEN )

        res.status(200).json({token})
    }

    verificarToken(req, res){
        const token = req.header('TOKEN')
        console.log(token)
        const decoded = jwt.verify(token, process.env.PASS_TOKEN )
        console.log(decoded)

        res.send('ha llegado al controlador')
    }

}

module.exports = new IndexController;