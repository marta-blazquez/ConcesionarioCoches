console.log("estoy en el archivo callback.js");


//Un callback no es mas q una funcion a la que se le pasa como argumento otra función: 

function haceAlgo(callback){
    console.log("1");
    callback(); 
    console.log("2");
};

haceAlgo(function algo(){
        console.log("3");
        console.log("hola codehouse");
        console.log("4");
    }
);