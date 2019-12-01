import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-entrada",
  templateUrl: "./entrada.component.html"
})
export class EntradaComponent {
  valores: Object = {
    precioTel: null,
    valorPie: null
  };
  constructor(private router: Router) {}

  calcular(precioTel: number) {
    this.router.navigate(["/tabla", precioTel]);
  }

  /*  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("valor forma", forma.value);
    console.log("Valores", this.valores);
  }*/
}
