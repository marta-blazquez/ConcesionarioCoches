// Para movernos entre carpetas se utiliza comenad cd 
// cd nombre de la carpeta ; para entrar en esa carpeta
// cd .. o cd.. xa window xa subir un nivel de carpetas segun dnd nos encontramos. 

console.log("-------------Archivo principal---------------------");


//Desde este arhivo quiro ejecutar el archivo suma; eso es MODULAR 
//para ello tengo que exportar la función suma del otro archivo, para poder utilizarla en este archivo(archivo principal index.js).

// Para utilizar la funcionalidades de otro archivo ("secundario") necesito requerirlas; 
// para importarlas, llamarla, acceder a ese archivo, utilizo la palabra reservada "REQUIRE"
//Estamos requiriendo el archivo completo. 

const funcionSuma = require('./suma.js');

 

//objeto con X valores
console.log(funcionSuma);

//dentro del objeto funcionSuma accedo al clave sum => (lo que hay dentro de la suma:)
console.log(funcionSuma.suma);
console.log(funcionSuma.suma(4,4));
console.log(funcionSuma.sumarTresNumeros(2, 6, 18));


//archivo resta: 
const funcionResta = require("./resta.js");

console.log(funcionResta.resta(6,3));



