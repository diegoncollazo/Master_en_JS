"use strict";
var pelicula = {
  titulo: "Ironman",
  year: 2008,
  pais: "EEUU"
};

var peliculas = [
  pelicula,
  { titulo: "Ironman 2", year: 2010, pais: "EEUU" },
  { titulo: "Ironman 3", year: 2013, pais: "EEUU" }
];

var cajaPelicula = document.querySelector("#caja");

/*for(let i in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[i].titulo);
    cajaPelicula.append(parrafo);
}
/*
if (typeof(Storage) != 'undefined')
    console.log(true);
else
    console.log(false);
*/
localStorage.setItem("Clave01", "asdqwe");
localStorage.setItem("Clave02", "fghrt");
localStorage.setItem("Clave03", "qwert");
localStorage.removeItem("Clave01");

let clave = document.querySelector("#caja");
clave.innerHTML += localStorage.getItem("Clave02");
localStorage.setItem("peliculas", JSON.stringify(peliculas));
let pelis = JSON.parse(localStorage.getItem("peliculas"));
console.log(pelis);

document.querySelector("#caja").append(pelicula.pais);
