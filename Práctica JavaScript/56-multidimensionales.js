"use strict";

var equipos = new Array("Mercedes", "Redbull", "Ferrari", "Renault");
var pilotos = new Array("Hamilton", "Verstappen", "Leclerc", "Ricciardo");
pilotos.sort();
// console.log(pilotos);
// equipos.reverse();
// console.log(equipos);
var formula1 = [equipos, pilotos];

//Recorrer
for (let i = 0; i < formula1.length; i++) {
	for (let j = 0; j < formula1[i].length; j++) {
		// console.log(formula1[i][j]);
	}
}

//Une el array en un solo texto (pongo parametro de union)
var resultado = pilotos.join("-");
// console.log(resultado);

//Borra desde, cantidad
pilotos.splice(0, 2);
// console.log(pilotos);

/* Busqueda */
var busqueda = pilotos.find(dato => dato == "Ricciardo");
// console.log(busqueda);
var indice = pilotos.findIndex(dato => dato == "Ricciardo");
// console.log(indice);
var campeonatos = [6, 0, 0, 5];
console.log(campeonatos.some(dato => dato >= 6));
