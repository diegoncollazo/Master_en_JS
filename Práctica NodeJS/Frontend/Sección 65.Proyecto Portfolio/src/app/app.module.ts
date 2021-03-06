import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Modulos propios
import { Routing, AppRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        ErrorComponent,
        ProjectsComponent,
        AboutComponent,
        CreateComponent,
        DetailComponent,
        EditComponent,
        SliderComponent,
        ResaltadoDirective,
    ],
    imports: [BrowserModule, Routing, HttpClientModule, FormsModule],
    providers: [AppRoutingProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
