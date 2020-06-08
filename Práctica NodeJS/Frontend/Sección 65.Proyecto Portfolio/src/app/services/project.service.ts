import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

// Decorador
@Injectable()
export class ProjectService {
    public _url: string;
    constructor(private _http: HttpClient) {
        this._url = Global.url;
    }
    testService() {
        return 'Probando el servicio Angular';
    }
    saveProject(project: Project): Observable<any> {
        let _params = JSON.stringify(project);
        let _headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.post(this._url + 'save-project', _params, {
            headers: _headers,
        });
    }
    getProjects(): Observable<any> {
        let _headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.get(this._url + 'projects', { headers: _headers });
    }
}
