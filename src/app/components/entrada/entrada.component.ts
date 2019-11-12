import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-entrada",
  templateUrl: "./entrada.component.html"
})
export class EntradaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  calcular() {
    console.log("funciona");
    this.router.navigate(["/tabla"]);
  }
}
