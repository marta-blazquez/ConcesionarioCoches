const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    console.log('empieza el la funcion')
    const token= req.header('token')
    jwt.verify(token,process.env.PASS_TOKEN, (err,result)=>{
    console.log('comprueba el token')

        if(err){
            console.log("el error es " + err )
            return res.status(401).json("el token no es correcto")
        }
    console.log('El token es correcto y pasa al controller')

        next();
    });
}

module.exports= verifyToken;