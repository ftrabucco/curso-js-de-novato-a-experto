//polimorfismo

function determinaDato(a){

    if(a===undefined){
        console.log("A es undefined.. no se que hacer");
    }

    if(typeof a==="number"){
        console.log("A es un numero, y puedo hacer operacion con numeros");
    }

    if(typeof a==="string"){
        console.log("A es un texto, puedo hacer operaciones con textos");
    }

    if(typeof a ==="object"){
        console.log("A es un objeto.. pero puede ser cualquer cosa")

        if(a instanceof Number){
            console.log("A es un objeto Numerico")
        }
    }    

}

var b=new Number(3);

determinaDato({
    nombre:"fran"
});

console.log(b);

determinaDato(b);





