'use strict'

//var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
// caja.innerHTML = "Otra caja";
// caja.style.background = "red";
// caja.style.padding = "20px";
// caja.style.color = "white";


// var caja = document.getElementsByTagName('div');
// var seccion = document.querySelector('#seccion');
// seccion.append(document.createElement("hr"));
// for(let indice in caja){
//     if (typeof(caja[indice].textContent) == "string"){
//         var parrafo = document.createElement("p");
//         var numero = document.createTextNode(caja[indice].textContent);
//         parrafo.append(numero);
//         seccion.append(parrafo);
//     }
// }
// seccion.append(document.createElement("hr"));

var clases = document.getElementsByClassName('rojo');
var amarillo = document.getElementsByClassName('verde');
amarillo[0].style.background = 'green';

for(var indice in clases){//Comprobar que sean rojos
    if (clases[indice].className == 'rojo'){
        clases[indice].style.background = 'red';
    }
}
//Query
var encabezado = document.querySelector('#cabeza');
encabezado.style.background = ('blue');

var rojos = document.querySelectorAll('.rojo');
console.log(rojos);