import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas de mi App
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ProjectsComponent,
		CreateComponent,
		ContactComponent,
		ErrorComponent,
	],
	imports: [BrowserModule, AppRoutingModule, routing],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
