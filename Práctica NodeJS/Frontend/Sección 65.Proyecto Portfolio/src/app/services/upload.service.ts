import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
    public _url: string;
    constructor() {
        this._url = Global.url;
    }

    makeFileRequest(
        _url: string,
        _params: Array<string>,
        _files: Array<File>,
        _name: string
    ) {
        return new Promise(function (resolve, reject) {
            var _formData: any = new FormData();
            // Peticion AJAX
            var _xhr = new XMLHttpRequest();

            for (let i = 0; i < _files.length; i++) {
                _formData.append(name, _files[i], _files[i].name);
            }

            _xhr.onreadystatechange = function () {
                if (_xhr.readyState == 4 && _xhr.status == 200) {
                    resolve(JSON.parse(_xhr.response));
                } else {
                    reject(_xhr.response);
                }
            };

            _xhr.open('POST', _url, true);
            _xhr.send(_formData);
        });
    }
}
