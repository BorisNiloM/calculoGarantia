import { RouterModule, Routes } from "@angular/router";
import { EntradaComponent } from "./components/entrada/entrada.component";
import { TablaComponent } from "./components/tabla/tabla.component";

const APP_ROUTES: Routes = [
  { path: "entrada", component: EntradaComponent },
  { path: "tabla/:precioTel", component: TablaComponent },
  { path: "**", pathMatch: "full", redirectTo: "entrada" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
