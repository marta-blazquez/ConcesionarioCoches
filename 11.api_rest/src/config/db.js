//creamos un archivo de configuracion que vamos a utilizar en connectionDB
module.exports={

    db:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    //si necesito conectar a otra base de datos
    db2:{
        host: 'localhost',
        user: 'root',
        password: '1Capitan_pirata',
        database:'apirest2'
    }
}