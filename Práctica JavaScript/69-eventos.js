"use strict";
window.addEventListener("load", function() {
	// document.addEventListener('load', () =>{ //Cualquiera de las dos maneras
	//Eventos del mouse
	var boton = document.querySelector("#cargar");

	function colorBoton() {
		boton.style.background = "blue";
		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";
	}
	//Click
	boton.addEventListener("click", function() {
		//colorBoton()
		console.log(this);
		console.log("Haciendo click");
	});
	//Mouse over
	boton.addEventListener("mouseover", function() {
		this.style.background = "orange";
		console.log("Haciendo mouseover");
	});
	//Mouse out
	boton.addEventListener("mouseout", function() {
		this.style.border = "#ccc";
		console.log("Haciendo mouseout");
	});
	/* Eventos
    http://laplace.ucv.cl/Cursos/Old/FisComputacional/javascript/Tutorial/javascript5.html*/

	var texto = document.querySelector("#nombre");
	//Focus
	texto.addEventListener("focus", function() {
		console.log("Haciendo foco.");
	});
	//keydown
	texto.addEventListener("keydown", function(event) {
		console.log("Haciendo keydown.", String.fromCharCode(event.keyCode));
	});
	//keypress
	texto.addEventListener("keypress", function(event) {
		console.log("Haciendo keypress.", String.fromCharCode(event.keyCode));
	});
	//keyup
	texto.addEventListener("keyup", function(event) {
		console.log("Haciendo keyup.", String.fromCharCode(event.keyCode));
	});
});
