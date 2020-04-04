"use strict";

var listado = document.querySelector("#listado");
var janet = document.querySelector("#janet");
var carga = document.querySelector(".carga");
var alumno = document.querySelector(".alumno");

getUsuarios()
	.then(data => data.json())
	.then(users => {
		cargarUsuarios(users.data);
		return getInfo();
	})
	.then(dato => {
		alumno.innerHTML = dato;
		return getUsuario();
	})
	.then(data => data.json())
	.then(janet => {
		cargarUsuario(janet.data);
	})
	.catch(error => {
		console.log(error + " FFFF");
		// alert("Error de petición");
	});

function getUsuarios() {
	//Primer promesa
	return fetch("https://reqres.in/api/users?page=2");
	// return fetch("https://reqres.in/api/unknown/23");
}

function getUsuario() {
	//Segunda promesa
	return fetch("https://reqres.in/api/users/2");
}

function getInfo() {
	let alumno = {
		nombre: "Diego",
		apellido: "Collazo",
		edad: 38
	};
	return new Promise((resolve, reject) => {
		let retorno;
		setTimeout(function() {
			retorno = JSON.stringify(alumno);
			if (typeof retorno != "string" || retorno == "")
				return reject("Error de carga.");
			else return resolve(retorno);
		}, 3000);
	});
}

function cargarUsuarios(parametro) {
	if (parametro.length > 0) {
		parametro.map((user, i) => {
			carga.style.display = "none";
			let nombre = document.createElement("h3");
			nombre.innerHTML = user.first_name + " " + user.last_name;
			listado.appendChild(nombre);
		});
	} else {
		carga.innerHTML = "No hay datos.";
	}
}

function cargarUsuario(parametro) {
	let nombre = document.createElement("h3");
	let avatar = document.createElement("img");
	nombre.innerHTML = parametro.first_name + " " + parametro.last_name;
	avatar.src = parametro.avatar;
	janet.appendChild(nombre);
	janet.appendChild(avatar);
}
