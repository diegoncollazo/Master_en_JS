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
    public _save_project;
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

    onSubmit(form) {
        // Guardar datos básicos
        this._projectService.saveProject(this._project).subscribe(
            (response) => {
                if (response.project) {
                    // Subir la imagen
                    if (this._filesToUpload) {
                        this._uploadService
                            .makeFileRequest(
                                Global.url +
                                    'upload-image/' +
                                    response.project._id,
                                [],
                                this._filesToUpload,
                                'image'
                            )
                            .then((result: any) => {
                                this._save_project = result.project;
                                this._status = 'success';
                                form.reset();
                            });
                    } else {
                        this._save_project = response._project;
                        this._status = 'success';
                        form.reset();
                    }
                } else {
                    this._status = 'failed';
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
    // Metodo que detecta cambio en los Inputs
    fileChangeEvent(_fileInput: any) {
        this._filesToUpload = <Array<File>>_fileInput.target.files;
    }
}
