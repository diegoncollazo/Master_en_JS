"use strict";
// Interface
interface CamisetaBase {
	setColor(color: string): void;
	getColor(): string;
}

// Decorador
function estampar(logo: string) {
	return function(target: Function) {
		target.prototype.estampado = function(): void {
			console.log("Estampada con el logo: " + logo);
		};
	};
}

//Clase
@estampar("Nike")
export class Camiseta implements CamisetaBase {
	// Implemento la Interface
	/* 
    Private
    Public
    Protected
     */
	// Propiedades
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;
	// Constructores
	constructor(
		color: string,
		modelo: string,
		marca: string,
		talla: string,
		precio: number
	) {
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
	// Métodos
	public setColor(color: string) {
		this.color = color;
	}
	public getColor() {
		return this.color;
	}
}
// Clase hija
class Sudadera extends Camiseta {
	//Atributo
	public capucha: boolean;
	// Constructor
	constructor(
		capucha: boolean,
		color: string,
		modelo: string,
		marca: string,
		talla: string,
		precio: number
	) {
		super(color, modelo, marca, talla, precio);
		this.capucha = capucha;
	}
}

var camiseta = new Camiseta("asd", "asd", "asd", "asd", 1);
// camiseta.estampado();
