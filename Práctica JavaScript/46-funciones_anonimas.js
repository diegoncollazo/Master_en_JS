"use strict";
function suma(numero1, numero2, parametro1, parametro2) {
	var retorno = numero1 + numero2;
	parametro1(retorno);
	parametro2(retorno);
	return retorno;
}

suma(
	5,
	10,
	function(dato) {
		console.log("Primer funcion da: ", dato);
	}, //segunda funcion con flecha
	dato => {
		console.log("Segunda funcion da: ", dato * 4);
	}
);
