


function evento(arg){
    console.log("Me dispare");
    console.log(arg.x,arg.y);
}


var objeto=document.getElementById("objDemo");


objeto.addEventListener("click",evento);




