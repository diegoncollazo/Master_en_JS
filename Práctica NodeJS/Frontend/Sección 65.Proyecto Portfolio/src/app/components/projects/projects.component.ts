import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
    public _projects: Project[];
    public _url: string;
    constructor(private _projectService: ProjectService) {
        this._url = Global.url;
    }

    ngOnInit(): void {
        // Llamo al cargar el HTML
        this.getProjects();
    }

    getProjects() {
        this._projectService.getProjects().subscribe(
            (response) => {
                if(response.projects){
                    this._projects = response.projects;
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
}
