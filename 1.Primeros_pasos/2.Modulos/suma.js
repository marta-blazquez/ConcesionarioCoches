//Archivo que tiene funciones que suma números

function suma(a, b){
    return a + b; 
};

function sumarTresNumeros (a, b , c){
    return a + b + c; 
};

//exportar una función:
        // funcion suma:
        exports.suma = suma; 
        //funcion sumarTresNumeros:
        exports.sumarTresNumeros = sumarTresNumeros; 


//podemos exportar varias funciones del mismo archivo: 
        //Aqui ponemos el nombre de la función

        module.exports = {
            suma, 
            sumarTresNumeros
        }

//Lo lógico es exportarla con un nombre representativo: exports.suma = suma; Pero le puedo poner el nombre que quiera. 
