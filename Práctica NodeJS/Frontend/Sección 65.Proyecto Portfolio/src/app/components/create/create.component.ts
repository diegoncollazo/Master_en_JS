import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Form } from '@angular/forms';

// Decorador
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    providers: [ProjectService],
})
export class CreateComponent implements OnInit {
    public _title: string;
    public _project: Project;
    public _status: string;

    constructor(private _projectService: ProjectService) {
        this._title = 'Crear proyecto';
        this._project = new Project('', '', '', '', 2020, '', '');
    }

    ngOnInit(): void {}

    onSubmit(_form: any) {
        console.log(this._project);
        // Subscribe recoje lo que me devuelve la API Rest
        this._projectService.saveProject(this._project).subscribe(
            (response) => {
                if (response) {
                    this._status = 'success';
                    _form.reset();
                } else {
                    this._status = 'failed';
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
}
