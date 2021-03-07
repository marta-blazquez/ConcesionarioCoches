let connection= require('../config/db');




let productController = {};




productController.viewAllProducts=(req,res) =>{

    let sql=`SELECT * FROM product`;

    connection.query(sql, (err,results)=>{

        if(err)throw err;
        res.render('products', {results})
    })

}

productController.saveProduct= (req,res)=>{
    //NO VIENE DE LA URL DEL NAVEGADOR!!!!!
    //ES UN POST -> VIENE DE URL DEL FORMULARIO (ACTION)
    let id_user= req.params.id_user;

    let {name,description} = req.body.name


    let sql=`INSERT INTO product (name,description,id_user) VALUES ('${name}', '${description}', ${id_user})`;


    connection.query(sql, (err,result)=>{
        if(err)throw err;
        res.status(200).redirect('/users')
    })
}

module.exports= productController;