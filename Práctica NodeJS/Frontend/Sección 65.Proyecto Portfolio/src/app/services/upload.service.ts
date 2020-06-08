import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
    // URL de la API
    public _url: string;
    constructor() {
        this._url = Global.url;
    }
    // Peticion AJAX clasica, para subir un archivo.
    makeFileRequest(
        _url: string,
        _params: Array<string>,
        _files: Array<File>,
        _name: string
    ) {
        return new Promise(function (resolve, reject) {
            // Formulario clasico
            var _formData: any = new FormData();
            // Peticion AJAX con objeto de peticion asincronica
            var _xhr = new XMLHttpRequest();
            // Recorro Array de archivos
            for (var i = 0; i < this._files.length; i++) {
                _formData.append(name, _files[i], _files[i].name);
            }
            //Realizo la peticion AJAX
            _xhr.onreadystatechange = function () {
                if (_xhr.readyState == 4)
                    if (_xhr.status == 200) {
                        resolve(JSON.parse(_xhr.response));
                    } else {
                        reject(_xhr.response);
                    }
            };
            // Realizo el POST
            _xhr.open('POST', _url, true);
            _xhr.send(_formData);
        });
    }
}
