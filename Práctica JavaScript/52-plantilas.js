"use strict";
var nombres = prompt("Ingrese nombre(s): ");
var apellidos = prompt("Ingrese apellido(s): ");
//Plantilla JS con HTML
var plantilla = `
    <h1>Datos</h1>
    <h3>Nombre(s): ${nombres}</h3>
    <h3>Apellido(s): ${apellidos}</h3>
`;
document.write(plantilla);
