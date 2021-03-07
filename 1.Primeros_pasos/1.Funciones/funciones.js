// Node es un entorno de desarrollo backend de javascript
// Para ejecutar código necesito un terminal de mac/window o el visual studio code

//COMANDOS: 
//      node -- version             comprueba la version de node q tenemos instalada. 
//      cd                          me muevo entre carpetas.
//      cd "espacio"y el nombre de la carpeta  me diroge a esa carpeta.
//      cd ..                       salgo o subo un nivel de esa carpeta  cd.. (para windows)
//      ls                          te lista los archivos que hey en la carpeta 
//      dir                         te muestra los archivos que hay en la carpeta 
//      node nombredelarchvo.js     para abrir un archivo, una vez que estoy en la carperta node nombre del archivo.js (recuerda guardar antes);  
//      pwd                         para saber donde estoy

console.log("Mi primer archivo con Nodejs");

function suma(a, b){
    return a + b;
};

function resta(c, d){
    return c -d
};

function multiplicar (a, b){
    return a * b; 
}; 

console.log(suma(2, 88));
console.log(resta(8, 4));
console.log(multiplicar(5, 5)); 