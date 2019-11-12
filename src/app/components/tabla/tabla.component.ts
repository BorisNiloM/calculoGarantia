import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html"
})
export class TablaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  volver() {
    this.router.navigate(["/entrada"]);
  }
}
