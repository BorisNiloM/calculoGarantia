import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

//Rutas
import { APP_ROUTING } from "./app.routes";

//Serivicios
import { CalculosService } from "./servicio/calculos.service";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { EntradaComponent } from "./components/entrada/entrada.component";
import { TablaComponent } from "./components/tabla/tabla.component";

import localesEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
registerLocaleData(localesEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntradaComponent,
    TablaComponent,
    FooterComponent
  ],
  imports: [APP_ROUTING, BrowserModule],
  providers: [CalculosService, { provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
