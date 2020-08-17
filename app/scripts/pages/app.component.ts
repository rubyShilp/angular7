import { Component } from "@angular/core";
import { HttpServe } from "./../servers/httpServe/httpServe";
@Component({
  selector: "my-app",
  templateUrl: "./Main/main.html",
  providers: [HttpServe],
})
export class AppComponent {}
