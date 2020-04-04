"use strict";

window.addEventListener("load", function() {
	//console.log("Cargado.");
	var formulario = document.querySelector("#formulario");
	var enviados = document.querySelector(".enviados");
	enviados.style.display = "none";

	formulario.addEventListener("submit", function() {
		var nombre = document.querySelector("#nombre").value;
		var apellido = document.querySelector("#apellido").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("Nombre(s) no válido(s)");
			document.querySelector("#error_nombre").innerHTML =
				"Escriba un nombre válido.";
			//document.querySelector("#error_nombre").style.display = "none";
			return false;
		} else {
			document.querySelector("#error_nombre").innerHTML = null;
		}
		if (apellido.trim() == null || apellido.trim().length == 0) {
			alert("Apellido(s) no válido(s)");
			document.querySelector("#error_apellido").innerHTML =
				"Escriba un apellido válido.";
			return false;
		} else {
			document.querySelector("#error_apellido").innerHTML = null;
		}
		if (edad == null || edad <= 0 || isNaN(edad)) {
			alert("Edad no válida.");
			document.querySelector("#error_edad").innerHTML =
				"Escriba una edad válida.";
			return false;
		} else {
			document.querySelector("#error_edad").innerHTML = null;
		}
		enviados.style.display = "block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellido = document.querySelector("#p_apellido span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellido.innerHTML = apellido;
		p_edad.innerHTML = edad;
		/*
        var persona = [nombre, apellido, edad];
        for(var indice in persona){
            var parrafo = document.createElement("p");
            parrafo.append(persona[indice]);
            enviados.append(parrafo);
        }
        */
	});
});
