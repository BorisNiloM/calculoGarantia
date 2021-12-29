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
      return parseInt(precio) + 1990;
    } else if (parseInt(precio) < 20000) {
      return parseInt(precio) + 4990;
    } else if (parseInt(precio) < 35000) {
      return parseInt(precio) + 7990;
    } else if (parseInt(precio) < 50000) {
      return parseInt(precio) + 13990;
    } else if (parseInt(precio) < 70000) {
      return parseInt(precio) + 19990;
    } else if (parseInt(precio) < 100000) {
      return parseInt(precio) + 28990;
    } else if (parseInt(precio) < 150000) {
      return parseInt(precio) + 39990;
    } else if (parseInt(precio) < 200000) {
      return parseInt(precio) + 53990;
    } else if (parseInt(precio) < 300000) {
      return parseInt(precio) + 79990;
    } else if (parseInt(precio) < 400000) {
      return parseInt(precio) + 99990;
    } else if (parseInt(precio) < 500000) {
      return parseInt(precio) + 109990;
    } else if (parseInt(precio) < 600000) {
      return parseInt(precio) + 139990;
    } else if (parseInt(precio) < 700000) {
      return parseInt(precio) + 159990;
    } else if (parseInt(precio) < 800000) {
      return parseInt(precio) + 169990;
    } else if (parseInt(precio) < 900000) {
      return parseInt(precio) + 219990;
    } else if (parseInt(precio) < 1000000) {
      return parseInt(precio) + 239990;
    } else if (parseInt(precio) < 1100000) {
      return parseInt(precio) + 239990;
    } else if (parseInt(precio) < 1200000) {
      return parseInt(precio) + 269990;
    } else if (parseInt(precio) < 1400000) {
      return parseInt(precio) + 269990;
    }
    return precio;
  }

  garantiaPlan1(precio: any) {
    if (parseInt(precio) < 10000) {
      return parseInt(precio) + 3490;
    } else if (parseInt(precio) < 20000) {
      return parseInt(precio) + 5490;
    } else if (parseInt(precio) < 35000) {
      return parseInt(precio) + 9990;
    } else if (parseInt(precio) < 50000) {
      return parseInt(precio) + 16990;
    } else if (parseInt(precio) < 70000) {
      return parseInt(precio) + 24990;
    } else if (parseInt(precio) < 100000) {
      return parseInt(precio) + 34990;
    } else if (parseInt(precio) < 150000) {
      return parseInt(precio) + 49990;
    } else if (parseInt(precio) < 200000) {
      return parseInt(precio) + 59990;
    } else if (parseInt(precio) < 300000) {
      return parseInt(precio) + 89990;
    } else if (parseInt(precio) < 400000) {
      return parseInt(precio) + 119990;
    } else if (parseInt(precio) < 500000) {
      return parseInt(precio) + 139990;
    } else if (parseInt(precio) < 600000) {
      return parseInt(precio) + 179990;
    } else if (parseInt(precio) < 700000) {
      return parseInt(precio) + 199990;
    } else if (parseInt(precio) < 800000) {
      return parseInt(precio) + 229990;
    } else if (parseInt(precio) < 900000) {
      return parseInt(precio) + 259990;
    } else if (parseInt(precio) < 1000000) {
      return parseInt(precio) + 299990;
    } else if (parseInt(precio) < 1100000) {
      return parseInt(precio) + 299990;
    } else if (parseInt(precio) < 1200000) {
      return parseInt(precio) + 359990;
    } else if (parseInt(precio) < 1400000) {
      return parseInt(precio) + 339990;
    }
    return precio;
  }
}
