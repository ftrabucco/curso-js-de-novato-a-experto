//arreglos parte 2

var arr=[
    true,
    {
        nombre: "francisco",
        apellido:"trabucco"
    },
    function(){
        console.log("estoy viviendo en un arreglo")
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido )
    },
    ["hernando",
    "roberto",
    "luis rey",
    "agatha",
        ["juan",
         "pedro",
         "Dilcia",
         function(){
             console.log(this)
         }
        ]
    ]
]


console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1].nombre+ " "+ arr[1].apellido);

arr[2]();

arr[3](arr[1]);

console.log(arr[4][4][1]);

var arreglo2=arr[4][4];

arreglo2[1]="Pedra!"

console.log(arreglo2)
console.log(arr)

arreglo2[3]();






