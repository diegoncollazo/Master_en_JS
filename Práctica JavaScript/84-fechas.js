"use strict";
var fecha = new Date();


var fechaJSON = 
    `El año es: ${fecha.getFullYear()}
El mes es: ${fecha.getMonth()+1}
El día es: ${fecha.getDate()}
`;

console.log(fecha);
console.log(fechaJSON);
