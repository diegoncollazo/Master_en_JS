import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'sobre-mi', component: AboutComponent },
	{ path: 'proyectos', component: ProjectsComponent },
	{ path: 'crear-proyecto', component: CreateComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: '**', component: ErrorComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
