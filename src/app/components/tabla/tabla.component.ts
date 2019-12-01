import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CalculosService } from "../../servicio/calculos.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html"
})
export class TablaComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _calculosService: CalculosService
  ) {}

  precioTel: number;
  cuotas: any[];
  precioPlan2: number;
  precioPlan1: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.precioTel = params["precioTel"])
    );

    this.cuotas = this._calculosService.getIntereses();
    console.log(this.cuotas);

    this.precioPlan2 = this._calculosService.garantiaPlan2(this.precioTel);
    console.log(typeof this.precioPlan2);

    this.precioPlan1 = this._calculosService.garantiaPlan1(this.precioTel);
  }

  volver() {
    this.router.navigate(["/entrada"]);
  }
}
