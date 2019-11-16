import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CalculosService } from "../../servicio/calculos.service";

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

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.precioTel = params["precioTel"])
    );
    this.cuotas = this._calculosService.getIntereses();
    console.log(this.cuotas);
  }

  volver() {
    this.router.navigate(["/entrada"]);
  }
}
