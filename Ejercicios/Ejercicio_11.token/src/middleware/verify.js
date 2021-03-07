const jwt = require('jsonwebtoken');
function verifyToken(req,res,next){
    const token= req.header('token')
    jwt.verify(token,process.env.PASS_TOKEN, (err,result)=>{
        if(err){
            console.log("el error es " + err )
            return res.status(401).json("el token no es correcto")
        }
        console.log('El token es correcto y pasa ')
        next();
    });
}
module.exports= verifyToken;