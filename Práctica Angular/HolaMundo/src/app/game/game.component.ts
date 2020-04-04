import { Component, OnInit, DoCheck } from "@angular/core";

/* Creo el componente */
@Component({
	selector: "videogame",
	templateUrl: "./game.component.html"
})
export class VideogameComponent implements DoCheck {
	// Atributos
	public titulo: string;
	public listado: string;
	// Como en C#
	constructor() {
		this.titulo = "Alquiler de videojuegos - Game";
		this.listado = "Juegos mas alquilados - Game";
	}
	ngDoCheck() {
		// console.log("DoCheck Game");
	}
	cambiarTitulo() {
		this.titulo = "Nuevo titulo - Game";
	}
}
