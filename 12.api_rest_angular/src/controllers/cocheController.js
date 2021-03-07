const db = require('../config/connectionDB');

class CocheController {
    getCoches(req, res) {
        let sql = `Select * from coche`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results)
        })
    }
   
    postCoches(req, res) {
        const {id_coche, marca, modelo, puertas, tipo_coche, potencia, oferta, visible, vendido, fecha, precio} = req.body;
        let sql = `INSERT INTO coche (id_coche, marca, modelo, puertas, tipo_coche, potencia, oferta, visible, vendido, fecha, precio) 
        VALUES ('${id_coche}', '${marca}', '${modelo}', ${puertas}, '${tipo_coche}', ${potencia}, ${oferta}, ${visible}, '${vendido}', '${fecha}', ${precio})`
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ result, message: 'Introducido correctamente' })
        });
    }

    delete(req, res) {
        let id_coche = req.params.id;
        let sql = `Delete FROM coche Where id_coche = '${id_coche}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ message: 'El coche ha sido borrado con exito' })
        })
    }

    update(req, res) {
        let  id_coche  = req.params.id;
        let {marca, modelo, puertas, tipo_coche, potencia, oferta, visible, vendido, fecha, precio} = req.body;
        let sql = `UPDATE coche SET marca = '${marca}', modelo = '${modelo}', puertas = ${puertas}, tipo_coche = '${tipo_coche}', potencia = ${potencia}, oferta = ${oferta}, visible = ${visible}, vendido = '${vendido}', fecha = '${fecha}', precio = ${precio}) Where id_coche = '${id_coche}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ result })
        });
    };

};


module.exports = new CocheController;