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

    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
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
}
