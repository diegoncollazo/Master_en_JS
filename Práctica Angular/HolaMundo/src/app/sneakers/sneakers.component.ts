import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Sneaker } from "../models/sneaker";
import { SneakerService } from "../services/sneaker.service";
import { provideRoutes } from "@angular/router";

/* Creo el componente */
@Component({
	selector: "sneakers",
	templateUrl: "./sneakers.component.html",
	styleUrls: ["../../assets/styles.css"],
	providers: [SneakerService]
})
export class SneakersComponent implements OnInit, DoCheck, OnDestroy {
	// Eventos ciclo de vida
	// Interfaz OnInit
	public zapatillas: Array<Sneaker>;
	public marcas: String[];
	public color: String;
	public mi_marca: String;

	constructor(private _sneakerService: SneakerService) {
		this.mi_marca = "Mi marca";
		this.color = "orange";
		this.marcas = new Array();
	}
	ngOnInit() {
		this.zapatillas = this._sneakerService.getZapatillas();
		// alert(this._sneakerService.getTexto());
		this.getMarcas();
	}
	ngDoCheck() {}
	ngOnDestroy() {}
	getMarcas() {
		this.zapatillas.forEach((zapatilla, index) => {
			if (this.marcas.indexOf(zapatilla.marca) < 0)
				this.marcas.push(zapatilla.marca);
			// console.log(index);
		});
		// console.log(this.marcas);
	}
	getMarca() {
		// alert(this.mi_marca);
	}
	addMarca() {
		this.marcas.push(this.mi_marca);
	}
	delMarca(index) {
		// delete this.marcas[index];
		this.marcas.splice(index, 1);
	}
	evento() {
		console.log(this.mi_marca);
	}
}
