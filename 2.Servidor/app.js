// libreria de HTTP => crear un servidor en local 

// llamar a un archivo: 
// creo una constante
// Esta libreria ya viene instalad en el ordenador 

//requiero la libreria/modulo/dependencia/paquete para poder utilizar todas sus funcionalidades
const http = require("http");

//Nombre en local en el q vamos a trabajar 
//const hostname = "127.0.0.1";
const hostname = "localhost"; 

//puerto del pc que vamos a utilizar 
const port = 3000; 

//creamos la constante server y ejecutamos la funcion createServer del "objeto" http 
//que recibe como callback otra función anonima

//la funcion anónima recibe dos parametros IMPORTANTES.
//req/request -> pedir a traves de un metodo http que ha ejecutado x
//res/respuesta -> Responder con X
const server = http.createServer((req, res)=> {
    //responde con un codigo de estado que es 100(toda va bien)
    res.statusCode = 200; 
    //responde que va a escribir en el navegador texto
    res.setHeader("Content-Type", "text/plain");
    // responde el texto que se va a pintar en el navegador
    res.end("Hello wordl");
}); 

// escucha y arraca en el puerto localhost:3000
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});


function suma(a, b){
    return a + b;
}

(a, b)=>{
    return a + b;
}





function serverConfig(request, response){
    // request: peticion 
    // response: respuesta 
    response.writeHead(200,{"Context-Type": "text-plain"})
    response.write("mi primer servidor");

    response.end()
}
let server = http.createServer(serverConfig)
server.listen(3000)

//http://localhost:8080
// 127.0.0.1:8080
// ctrl + c para salir del puerto 