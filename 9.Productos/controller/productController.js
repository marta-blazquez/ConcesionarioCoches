let connection = require("../config/db.js")
let productController = {};

//VER TODOS LOS PRODUCTOS
//localhost:3000/products/all   
//router.get('/all', productController.seeAll)

productController.seeAll = (req, res)=>{
    let sql = `Select * from products`;
    connection.query(sql, (err, result)=>{
      if(err)throw err;
      //res.json(result);
      //para mostrar
      res.render('products', {result});
    })
}

//VER EL FORMULARIO DE REGSTRO DE PRODUCTO 
//localhost:3000/products/form
//router.get('/all', productController.getForm)
productController.getForm = (req, res)=>{
      res.render('form', {res});
}

//VER EL FORMULARIO LLENO PARA EDITARLO 
//localhost:3000/products/updateForm
//router.get('/updateForm', productController.getUpdateForm)
productController.getUpdateForm = (req, res)=>{
    let id_product = req.params.id_product;
    let sql = `Select * from products WHERE id_product = ${id_product}`;
    connection.query(sql, (err, result)=>{
        if(err)throw err;
    res.render('updateForm', {product: result[0]})
    });
}

//GUARDAR UN PRODUCTO NUEVO 
//localhost:3000/products/new      
//router.post('/new', productController.new)
productController.newOne = (req, res)=>{
    let {name, price, description} = req.body;
    let sql = `INSERT INTO products (name, price, description) VALUES ('${name}', ${price}, '${description}')`;
      connection.query(sql, (err, result) =>{
        if(err)throw err;
        //res.status(200).json(result);
        res.redirect('/products/all')
      })
};

//<td><a href="/products/updateForm/<%= products.id_product %>">Update</a></td>
//localhost:3000/products/:id_product   --> ver un producto 
//router.get('/:id_product', productController.seeOne)
productController.seeOne = (req, res)=>{
    let id_product = req.params.id_product;
    let sql = `Select * from products WHERE id_product = ${id_product}`;
    connection.query(sql, (err, result)=>{
      if(err)throw err;
      //res.json(result);
      //para mostrar
      res.render('products', {result});
    })
}



//localhost:3000/products/update/:id_product    --> Actualizar un producto 
//router.put('/update/:id_product', productController.update)
//Se deben de actualizar todos los valores (si quisieras modificar un solo campo usariamos patch (hay otra sentencia al ejecutar))
productController.update = (req, res)=>{
    let id_product = req.params.id_product;
    let {name, price, description} = req.body;
    let sql= `Update products SET name = '${name}', price = ${price}, description = '${description}' WHERE id_product = ${id_product}`;
  connection.query(sql, (err, result)=>{
    if(err)throw err;
    //res.status(200).json(result)
    res.redirect('/products/all')
    //res.render('form',{result});
  })
};


 

//localhost:3000/products/delete/:id_products
//router.get('/delete/:id_product', productController.delete)
productController.delete = (req, res)=>{
    let id_product = req.params.id_product;
    let sql = `Delete FROM products WHERE id_product = ${id_product}`;
    connection.query(sql,(err,result)=>{
      if(err)throw err;
      res.json(result)
    })
};

module.exports = productController; 