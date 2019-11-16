import { Injectable } from "@angular/core";

@Injectable()
export class CalculosService {
  private intereses: any[] = [
    {
      cuota: 1,
      interes: 0
    },
    {
      cuota: 2,
      interes: 1.03962
    },

    {
      cuota: 3,
      interes: 1.06161
    },
    {
      cuota: 4,
      interes: 1.07688
    },
    {
      cuota: 5,
      interes: 1.09271
    },
    {
      cuota: 6,
      interes: 1.10869
    },
    {
      cuota: 7,
      interes: 1.12482
    }
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

  getIntereses() {
    return this.intereses;
  }
}
