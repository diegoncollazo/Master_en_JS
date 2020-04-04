"use strict";
// Importar modulos del router de Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Importar componentes
import { SneakersComponent } from "./sneakers/sneakers.component";
import { VideogameComponent } from "./game/game.component";
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from './contacto/contacto.component'

// Array de rutas
const appRoutes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "zapatillas", component: SneakersComponent },
	{ path: "juegos", component: VideogameComponent },
	{ path: "cursos", component: CursosComponent },
	{ path: "cursos/:nombre/:followers", component: CursosComponent },
	{ path: "externo", component: ExternoComponent },
	{ path: "contacto", component: ContactoComponent },
	{ path: "**", component: HomeComponent }
];
// Exportar el modulo router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
