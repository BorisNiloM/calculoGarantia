import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "plan2"
})
export class Plan2Pipe implements PipeTransform {
  transform(value: number): any {
    if (0 < value < 9999) {
      return 1990;
    }
  }
}
