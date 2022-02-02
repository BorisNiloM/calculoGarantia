import { Injectable } from "@angular/core";

@Injectable()
export class CalculosService {
  private intereses: any[] = [
    {
      cuota: 1,
      interes: 1
    },
    {
      cuota: 2,
      interes: 1.05462
    },

    {
      cuota: 3,
      interes: 1.06141
    },
    {
      cuota: 4,
      interes: 1.07714
    },
    {
      cuota: 5,
      interes: 1.09302
    },
    {
      cuota: 6,
      interes: 1.10905
    },
    {
      cuota: 7,
      interes: 1.12524
    },
    {
      cuota: 8,
      interes: 1.14157
    },
    {
      cuota: 10,
      interes: 1.17470
    },
    {
      cuota: 12,
      interes: 1.15291
    },
    {
      cuota: 15,
      interes: 1.26013
    },
    {
      cuota: 18,
      interes: 1.31319
    },
    {
      cuota: 24,
      interes: 1.42326
    },
    {
      cuota: 36,
      interes: 1.59514
    },
    {
      cuota: 48,
      interes: 1.93848
    }
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

  getIntereses() {
    return this.intereses;
  }

  garantiaPlan2(precio: any) {
    if (parseInt(precio) < 10000) {
      return parseInt(precio) + 2290;
    } else if (parseInt(precio) < 20000) {
      return parseInt(precio) + 5690;
    } else if (parseInt(precio) < 35000) {
      return parseInt(precio) + 8990;
    } else if (parseInt(precio) < 50000) {
      return parseInt(precio) + 15990;
    } else if (parseInt(precio) < 70000) {
      return parseInt(precio) + 22990;
    } else if (parseInt(precio) < 100000) {
      return parseInt(precio) + 31990;
    } else if (parseInt(precio) < 150000) {
      return parseInt(precio) + 42990;
    } else if (parseInt(precio) < 200000) {
      return parseInt(precio) + 56990;
    } else if (parseInt(precio) < 300000) {
      return parseInt(precio) + 85990;
    } else if (parseInt(precio) < 400000) {
      return parseInt(precio) + 115990;
    } else if (parseInt(precio) < 500000) {
      return parseInt(precio) + 128990;
    } else if (parseInt(precio) < 600000) {
      return parseInt(precio) + 161990;
    } else if (parseInt(precio) < 700000) {
      return parseInt(precio) + 184990;
    } else if (parseInt(precio) < 800000) {
      return parseInt(precio) + 197990;
    } else if (parseInt(precio) < 900000) {
      return parseInt(precio) + 254990;
    } else if (parseInt(precio) < 1100000) {
      return parseInt(precio) + 277990;
    } else if (parseInt(precio) < 1300000) {
      return parseInt(precio) + 313990;
    } else if (parseInt(precio) < 1500000) {
      return parseInt(precio) + 346990;
    } else if (parseInt(precio) < 1750000) {
      return parseInt(precio) + 405990;
    } else if (parseInt(precio) < 2000000) {
      return parseInt(precio) + 460990;
    } else if (parseInt(precio) < 2250000) {
      return parseInt(precio) + 518990;
    } else if (parseInt(precio) < 2500000) {
      return parseInt(precio) + 570990;
    }
    return precio;
  }

  garantiaPlan1(precio: any) {
    if (parseInt(precio) < 10000) {
      return parseInt(precio) + 3990;
    } else if (parseInt(precio) < 20000) {
      return parseInt(precio) + 6990;
    } else if (parseInt(precio) < 35000) {
      return parseInt(precio) + 10990;
    } else if (parseInt(precio) < 50000) {
      return parseInt(precio) + 17990;
    } else if (parseInt(precio) < 70000) {
      return parseInt(precio) + 25990;
    } else if (parseInt(precio) < 100000) {
      return parseInt(precio) + 37990;
    } else if (parseInt(precio) < 150000) {
      return parseInt(precio) + 53990;
    } else if (parseInt(precio) < 200000) {
      return parseInt(precio) + 64990;
    } else if (parseInt(precio) < 300000) {
      return parseInt(precio) + 94990;
    } else if (parseInt(precio) < 400000) {
      return parseInt(precio) + 136990;
    } else if (parseInt(precio) < 500000) {
      return parseInt(precio) + 160990;
    } else if (parseInt(precio) < 600000) {
      return parseInt(precio) + 201990;
    } else if (parseInt(precio) < 700000) {
      return parseInt(precio) + 229990;
    } else if (parseInt(precio) < 800000) {
      return parseInt(precio) + 266990;
    } else if (parseInt(precio) < 900000) {
      return parseInt(precio) + 300990;
    } else if (parseInt(precio) < 1100000) {
      return parseInt(precio) + 346990;
    } else if (parseInt(precio) < 1300000) {
      return parseInt(precio) + 416990;
    } else if (parseInt(precio) < 1500000) {
      return parseInt(precio) + 466990;
    } else if (parseInt(precio) < 1750000) {
      return parseInt(precio) + 535990;
    } else if (parseInt(precio) < 2000000) {
      return parseInt(precio) + 586990;
    } else if (parseInt(precio) < 2250000) {
      return parseInt(precio) + 699990;
    } else if (parseInt(precio) < 2500000) {
      return parseInt(precio) + 760990;
    }
    return precio;
  }
}
