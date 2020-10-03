


var hoy = new Date();
var fechaMiliSegundos=new Date(0);
var fechaFija= new Date( 2016, 9, 21, 23, 10, 15, 1 );

console.log(hoy);
console.log(fechaMiliSegundos);
console.log(fechaFija);


console.log(hoy.getFullYear());

var inicio=new Date();

for(var i =0; i<15000;i++){
    console.log("algo..")
}

var fin= new Date();

//console.log(inicio);
//console.log(fin);

var duracion=fin.getTime()-inicio.getTime();
console.log(duracion+" milisegundos");





















