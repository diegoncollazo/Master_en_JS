import { Injectable } from "@angular/core";
import { Sneaker } from "../models/sneaker";

@Injectable()
export class SneakerService {
	public zapatillas: Array<Sneaker>;
	constructor() {
		this.zapatillas = [
			new Sneaker("Neo I", "Adidas", "Negras", 150, true),
			new Sneaker("Runners", "Nike", "Blancas", 70, false),
			new Sneaker("Neo III", "Adidas", "Azules", 90, true),
			new Sneaker("Neo IV", "Rebook", "Rojas", 35, false),
			new Sneaker("Neo V", "Rebook", "Azules", 120, true)
		];
	}
	getTexto() {
		return "Holanda";
	}
	getZapatillas(): Array<Sneaker> {
		return this.zapatillas;
	}
}
