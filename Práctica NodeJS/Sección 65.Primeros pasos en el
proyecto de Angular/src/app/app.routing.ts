import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'sobre-mi', component: AboutComponent },
	{ path: 'proyectos', component: ProjectsComponent },
	{ path: 'crear-proyectos', component: CreateComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
//Cargar configurar de rutas en el Router de Angular.
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);