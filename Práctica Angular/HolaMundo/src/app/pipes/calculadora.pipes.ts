import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "calculadora" })
export class CalculadoraPipe implements PipeTransform {
	// dato | calculadora: otroDato
	// param1              param2
	transform(parametro1: any, parametro2: any) {
		/* Utilizo JS para realizar las operaciones */
		let operaciones = `
        Suma: ${parametro1 + parametro2}
        Resta: ${parametro1 - parametro2}
        Multiplicacion: ${parametro1 * parametro2}
        Division: ${parametro1 / parametro2}
        `;
		return operaciones;
	}
}
