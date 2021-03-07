const db = require('../config/connectionDB');

class PetController{ 

    getPet(req, res){
        const {id} = req.params;
        let sql = `Select * from pet`;
        db.query(sql, (err, results)=>{
            if(err)throw err;
            res.status(200).json(results)
        })

    }

    postPet(req, res){
        const img_pet = req.file.filename;
        const { name, race, id_user }= req.body;
        console.log(req.body)
        let sql = `INSERT into pet (name, race, img_pet, id_user) VALUES ('${name}', '${race}', '${img_pet}', ${id_user})` 
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result, message:'ok'})
        });
    };

    deletePet(req, res){
        let id = req.params.id;
        let sql = `Delete FROM pet Where id_pet = ${id_pet}`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({message:'La mascota ha sido borrado con exito'})
        })
    }

    updatePet(req, res){
        let {id} = req.params; 
        let {name, race} = req.body;
        let sql = `Update pet SET name = '${name}', race '${race}'= WHERE id_pet = ${id_pet}`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result})
        });
    };

    postPetImage(req, res){
        const img_pet = req.file.filename;
        const { name, race}= req.body;
        let sql = `INSERT into pet (name, race) VALUES ('${name}', '${race}')` 
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json({result, message:'ok'})
        });
    };



};

module.exports = new PetController;