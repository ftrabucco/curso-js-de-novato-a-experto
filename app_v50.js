
/*
setTimeout(function(){
    console.log("paso un segundo")
},1000)*/

/*
var segundos=0;

var intervalo = setInterval(function(){
    
    segundos ++;

    console.log("seg", segundos);

    if(segundos===3){
        clearInterval(intervalo);
    }

    console.log(this)

},1000)
*/

var nombre="pedro";
var edad=60;

var juan={
    nombre:"Juan",
    edad:30,
    imprimir: function(){

        var self=this;

        setTimeout(function(){

            console.log(this)
            console.log(self.nombre,self.edad)
            
        },2000);
    }
};

juan.imprimir();









