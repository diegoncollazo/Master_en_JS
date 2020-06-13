import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Form } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { Global } from './../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-edit',
    templateUrl: '../create/create.component.html',
    styleUrls: ['./edit.component.css'],
    providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
    public _title: string;
    public _project: Project;
    public _save_project;
    public _status: string;
    public _filesToUpload: Array<File>;
    public _url: string;

    constructor(
        private _projectService: ProjectService,
        private _uploadService: UploadService,
        private _route: ActivatedRoute
    ) {
        this._title = 'Editar proyecto';
        this._url = Global.url;
    }

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            let _id = params.id;
            this.getProject(_id);
        });
    }

    getProject(_id) {
        this._projectService.getProject(_id).subscribe(
            (response) => {
                this._project = response.project;
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }

    onSubmit(form) {
        this._projectService.updateProject(this._project).subscribe(
            (response) => {
                //Salvo los cambios
                if (this._filesToUpload) {
                    this._uploadService
                        .makeFileRequest(
                            Global.url + 'upload-image/' + response.project._id,
                            [],
                            this._filesToUpload,
                            'image'
                        )
                        .then((result: any) => {
                            this._save_project = result.project;
                            this._status = 'success';
                        });
                } else {
                    this._save_project = response.project;
                    this._status = 'success';
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
