'use strict'
function pruebra(parametro, opcional = false){
    return parametro
}
var nombre = "Diego";
console.log(nombre);
Prueba Let
if (nombre == "Diego"){
    let apellido = "Collazo";
    document.write("Nombre completo: </br>", nombre +" "+apellido);
}
Constantes
const ip = "192.168.100.254";
console.log(ip);
Variables
var texto = "Holanda";
var numero = 123;
var booleana = true;
var retorno = confirm("Si o no");
console.log(retorno);
var retorno = prompt("Que onda?");
isNan parseInt 

function listar(parametro1, parametro2, ...parametros){
    console.log(parametro1);
    console.log(parametro2);
    console.log(parametros);
}

listar("Hola", "Adios", "Bueno","Malo");

var array = [1, 2, 3, 4, 5, 6];

listar(array, 7, 8, 9);