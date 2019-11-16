import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Rutas
import { APP_ROUTING } from "./app.routes";

//Serivicios
import { CalculosService } from "./servicio/calculos.service";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { EntradaComponent } from "./components/entrada/entrada.component";
import { TablaComponent } from "./components/tabla/tabla.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntradaComponent,
    TablaComponent
  ],
  imports: [APP_ROUTING, BrowserModule],
  providers: [CalculosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
