const db = require('../config/connectionDB');

class ViajeController {

    getViaje(req, res) {
        const { id } = req.params;
        let sql = `Select * from viaje`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json(results)
        })

    }

    postViaje(req, res) {
        const { id_viaje, nombre, tipo, duracion, destino, plazas, estado, rating } = req.body;
        let sql = `INSERT into viaje (id_viaje, nombre, tipo, duracion, destino, plazas, estado, rating) VALUES ('${id_viaje}', '${nombre}', '${tipo}', '${duracion}', '${destino}', '${plazas}', '${estado}', '${rating}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ result, message: 'ok' })
        });
    };

    delete(req, res) {
        let id_viaje = req.params.id_viaje;
        let sql = `Delete FROM viaje Where id_viaje = ${id_viaje}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ message: 'El viaje ha sido borrado con exito' })
        })
    }

    update(req, res) {
        let id = req.params.id;
        let { id_viaje, nombre, tipo, duracion, destino, plazas, estado, rating } = req.body;
        let sql = `Update viaje SET nombre = '${nombre}', tipo = '${tipo}', duracion = '${duracion}', destino = '${destino}', plazas = '${plazas}', estado = ${estado}, rating = ${rating} WHERE id_user = ${id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ result })
        });
    };

    postViajeImage(req, res) {
        const img_user = req.file.filename;
        const { id_viaje, nombre, tipo, duracion, destino, plazas, imagen, estado, rating } = req.body;
        let sql = `INSERT into viaje (id_viaje, nombre, tipo, duracion, destino, plazas, imagen, estado, rating) VALUES 
        ('${nombre}', '${tipo}', '${duracion}', '${destino}', '${plazas}', ${estado}, ${rating})`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json({ result, message: 'ok' })
        });
    };

};

module.exports = new ViajeController; 