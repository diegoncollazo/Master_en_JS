import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
// Lo cargo para poder obtener el _id mediante la url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [ProjectService],
})
export class DetailComponent implements OnInit {
    public _url: String;
    public _project: Project;
    public confirm: boolean;

    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this._url = Global.url;
        this.confirm = false;
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
    setConfirm(_confirm) {
        this.confirm = _confirm;
    }
    deleteProject(_id) {
        this._projectService.deleteProject(_id).subscribe(
            (response) => {
                if (response.project) {
                    this._router.navigate(['/proyectos']);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
}
