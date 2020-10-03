
var Persona=function(){
    this.nombre="Juan";
    this.apellido="Pineda";
    this.edad=18;
}

var juan=new Persona();

Persona.prototype.direccion="San Juan";

for(  prop in  juan){

    if(juan.hasOwnProperty(prop))
    continue;

    console.log(prop," : ", juan[prop]);

}  
 
for( num in[1,2,3,4,5,6,7,8,9,10] ){
    console.log(num);
}























