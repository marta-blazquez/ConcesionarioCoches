function division(a,b){
    return a / b; 
}

function division2(b, a){
    if (a == 0){
        console.log('no se puede dividir por 0');
    }
    else {
        return b / a; 
    }
}

module.exports = {
    division, 
    division2
}