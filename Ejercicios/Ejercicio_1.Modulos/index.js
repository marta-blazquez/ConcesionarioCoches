//crear 4 archivos js distintos: suma, resta, multiplicación y division.
//en este archivo index.js (principal) vamos a llamar y con console.log() ejecutar todas las funciones 
//en la segunda funcion divisora en vez de solo un return vamos a tener un condicional :
//si el resultado es igual a cero me muestr un console.log('no se puede dividir por 0') y si no que retorne la divison de dos numeros


const funcionSuma= require('./suma.js');

console.log(funcionSuma.suma(2,2));
console.log(funcionSuma.suma2(2,2,2));

const funcionResta= require('./resta.js');

console.log(funcionResta.resta(4,2));
console.log(funcionResta.resta2(6,2,1));

const funcionMultiplicacion= require('./multiplicacion.js');

console.log(funcionMultiplicacion.multiplicacion(5,6));
console.log(funcionMultiplicacion.multiplicacion2(2,4,5));

const funcionDivision= require('./division.js');

console.log(funcionDivision.division(10,5));
console.log(funcionDivision.division2(5,0));
