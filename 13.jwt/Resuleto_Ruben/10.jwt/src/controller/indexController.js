
const jwt= require('jsonwebtoken');
const connection = require('../../../api_back/src/config/connectionDb');

class IndexController{

    getTest(req,res){
        res.send({message:'funciona el controlador'})
    }


    login(req,res){
        const {name,password}=req.body;
        console.log(req.body)
        let sql= `SELECT * FROM user WHERE name = ${name}, password= ${password}`;
        
        conn.query(sql, (err,result)=>{
            if(err)throw err;
            if(result.lenght === 0){
                res.send('no existe el usuario')
            }else{
                const token=  jwt.sign({result},process.env.PASS_TOKEN)
                ///creo el token y lo envio al front
                res.status(200).json({token})
            }
        })
        //query a base de datos y si el usuario existe que ejecutara lo siguiente

        // let results = {
        //     name:"ruben",
        //     last_name: "Rios",
        //     age: 82,
        //     email:"ruben@ruben.com"
        // }
        // //utilizamos la libreria jwt con el metodo sign
        // //como primer parametro los datos que van a formar parte del payload:el cuerpo del token (la parte intermedia del token)
        // //como segundo parametro la clave secreta con la que se va a crear el token y que sera necesaria para despues comprobar el token
        // const token=  jwt.sign({results},process.env.PASS_TOKEN)
        // ///creo el token y lo envio al front
        // res.status(200).json({token})
    }

    getUserDates(req,res){
        
        // const token = req.header('TOKEN')
        // const decoded= jwt.verify(token,process.env.PASS_TOKEN)
        
        console.log('empieza el controller')

        
        
        res.send('ok funciona')

    }
}



module.exports= new IndexController;