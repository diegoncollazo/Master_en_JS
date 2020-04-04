import { Component } from "@angular/core";
import { miConfiguracion } from "./models/configuration";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	public config = miConfiguracion;
	public title: string;
	public descripcion: string;
	public mostrarVideojuego: boolean = true;
	constructor() {
		this.title = miConfiguracion.titulo;
		this.descripcion = miConfiguracion.descripcion;
	}
	mostrarJuegos(respuesta: boolean) {
		this.mostrarVideojuego = respuesta;
	}
}
