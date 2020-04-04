"use strict";
//Evento Guardar + Carga de pelicula.
var frmIngreso = document.querySelector("#frmIngreso");
frmIngreso.addEventListener("submit", function() {
	let aMovie = document.querySelector("#aMovie").value;
	if (aMovie.length > 0) localStorage.setItem(aMovie, aMovie);
});
//Agregar peliculas al listado
var listado = document.querySelector("#listado");
for (let i in localStorage) {
	if (typeof localStorage[i] == "string") {
		let li = document.createElement("li");
		li.append(localStorage[i]);
		listado.append(li);
	}
}
//Evento Borrar
var frmEgreso = document.querySelector("#frmEgreso");
frmEgreso.addEventListener("submit", function() {
	let bMovie = document.querySelector("#bMovie").value;
	console.log("Entra");
	if (bMovie.length > 0) {
		console.log("Entra");
		localStorage.removeItem(bMovie, bMovie);
	}
});
