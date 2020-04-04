import { Injectable } from "@angular/core";
import {
	HttpClientModule,
	HttpHeaders,
	HttpClient
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable() // Decorador
export class PeticionesService {
	public _url: string;
	constructor(public _http: HttpClient) {
		this._url = "https://reqres.in";
	}
	// Devuelve un Observable obligatorio
	getUser(userID: any): Observable<any> {
		return this._http.get(this._url + "/api/users/" + userID);
	}
	// Peticion AJAS con metodo POST
	addUser(user): Observable<any> {
		let _params = JSON.stringify(user);
		let _headers = new HttpHeaders().set(
			"Content-Type",
			"application/json"
		);
		return this._http.post(this._url + "/api/users", _params, {
			headers: _headers
		});
	}
}
