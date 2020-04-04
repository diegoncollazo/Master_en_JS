"use strict";
// Cadena
var cadena: string | number;
cadena = "Diego";
cadena = 1;
// Numero
var numero: number;
numero = 39;
// Booleano
var booleano: boolean;
booleano = true;
// Cualquiera
var cualquiera: any;
cualquiera = "Collazo";
// Arrays
var lenguajes: Array<number> = [11, 7, 1981];
var numeros: number[] = [3, 14];
// Datos personalizados
var variosTipos: number | string;

/* Funciones */
function getNumero(valor: number = 12): string {
	return "El numero es " + valor;
}
console.log(getNumero(55));
