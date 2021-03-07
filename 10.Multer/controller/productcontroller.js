let connection = require('../config/db');

let productcontroller={};

productcontroller.viewProducts= (req, res) =>{
    let sql = `SELECT * FROM product`;
    connection.query(sql, (error, results)=>{
        if(error)throw error;
        res.render('products', {results})
    })

}

productcontroller.saveProduct= (req, res)=>{

    let id_user= req.params.id_user;
    let {name, description} = req.body;
    
    let sql = `INSERT INTO product (name, description, id_user) VALUES ('${name}', '${description}', ${id_user})`;
    connection.query(sql, (err, result)=>{
        if(err)throw err;
        res.status(200).redirect('/users')
    })
}

   

module.exports=productcontroller;