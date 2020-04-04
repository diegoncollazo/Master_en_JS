import { Component, OnInit } from "@angular/core";
import { PeticionesService } from "../services/peticiones.service";

@Component({
	selector: "app-externo",
	templateUrl: "./externo.component.html",
	styleUrls: ["./externo.component.css"],
	providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user: any;
	public userID: any;
	public fecha: any;
	// AJAX / POST
	public new_user: any;
	public usuario_guardado;
	/* Constructor */
	constructor(private _peticionesService: PeticionesService) {
		this.userID = 1;
		this.new_user = {
			name: "",
			job: ""
		};
		this.usuario_guardado = false;
	}

	ngOnInit() {
		this.fecha = new Date(2020, 1, 3); // El array de mes empieza en 0
		this.cargaUsuario();
	}
	cargaUsuario() {
		this.user = false;
		this._peticionesService.getUser(this.userID).subscribe(
			// Dos funciones de callback
			result => {
				this.user = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	// Envio el usuario
	onSubmit(form) {
		this._peticionesService.addUser(this.new_user).subscribe(
			response => {
				console.log(response);
				this.usuario_guardado = response;
				form.reset();
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
