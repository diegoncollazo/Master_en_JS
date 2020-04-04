import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Routing propio
import { routing, appRoutingProviders } from "./app.routing";
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Componente propio
import { VideogameComponent } from "./game/game.component";
import { SneakersComponent } from "./sneakers/sneakers.component";
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
// Pipes propios
import { CalculadoraPipe } from "./pipes/calculadora.pipes";
@NgModule({
	declarations: [
		AppComponent,
		VideogameComponent,
		SneakersComponent,
		HomeComponent,
		CursosComponent,
		ExternoComponent,
		CalculadoraPipe,
		ContactoComponent
	],
	imports: [BrowserModule, FormsModule, routing, HttpClientModule], //AppRoutingModule,
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule {}
