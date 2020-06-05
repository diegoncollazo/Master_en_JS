import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Form } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { Global } from './../../services/global';

// Decorador
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
    public _title: string;
    public _project: Project;
    public _status: string;
    public _filesToUpload: Array<File>;

    constructor(
        private _projectService: ProjectService,
        private _uploadService: UploadService
    ) {
        this._title = 'Crear proyecto';
        this._project = new Project('', '', '', '', 2020, '', '');
    }

    ngOnInit(): void {}

    onSubmit(_form: any) {
        // Guardar formulario
        // Subscribe recoje lo que me devuelve la API Rest
        this._projectService.saveProject(this._project).subscribe(
            (response) => {
                if (response) {
                    // Subir la imagen
                    this._uploadService
                        .makeFileRequest(
                            Global.url + 'upload-image/' + this._project._id,
                            [],
                            this._filesToUpload,
                            'image'
                        )
                        .then((result: any) => {
                            console.log(result);
                            this._status = 'success'; 
                            // Reseteo el formulario
                            _form.reset();
                        });
                } else {
                    this._status = 'failed';
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
    fileChangeEvent(_fileInput: any) {
        this._filesToUpload = <Array<File>>_fileInput.target.files;
    }
}
