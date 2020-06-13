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
    getProject(_id): Observable<any> {
        let _headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.get(this._url + 'project/' + _id, {
            headers: _headers,
        });
    }
    deleteProject(_id): Observable<any> {
        let _headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.delete(this._url + 'project/' + _id, {
            headers: _headers,
        });
    }
    updateProject(_project): Observable<any>{
        let params = JSON.stringify(_project);
        let _headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.put(this._url + 'project/' + _project._id, params, {
            headers: _headers,
        });
    }
}
