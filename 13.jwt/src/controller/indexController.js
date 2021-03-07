const jwt = require('jsonwebtoken')

class IndexController{

    getTest(req, res){
        res.send({message:'funciona el controlador'})
    }

    login(req, res){
        const {name, password} = req.body;
        console.log(req.body)
        let result = {
            name: "Ruben",
            last_name: "Rios",
            age: 82,
            email: 'ruben@mail.com'
        }
        //utilizo la libreria jwt con el metodo sign (que expire en 24 hora (seg * min * horas))
        //const token = jwt.sign( {name, password}, secret, {expiresIn= 60 * 60 * 24} )
        //Como primer parametro los datos q van a formar parte del playload: el cuerpo del token (la parte intermedia del token)
        //como segundo parametro la clave secreta con la que se va a crear el token y que sera necesarioa desprues comprobar el token 
        const token = jwt.sign( {result}, process.env.PASS_TOKEN )
        res.status(200).json({token})
    }

    //verificar
    getUserDates(req, res){
        const token = req.header('TOKEN')
        console.log(token)
        const decoded = jwt.verify(token, process.env.PASS_TOKEN )
        console.log(decoded)

        res.send('ok, funciona')
        
    }


}

module.exports = new IndexController;