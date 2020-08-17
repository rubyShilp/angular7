import { Component, OnInit } from "@angular/core";
import { HttpServe } from "./../../../servers/httpServe/httpServe";
@Component({
  selector: "my-enterprise",
  templateUrl: "./enterprise.html",
  providers: [HttpServe],
})
export class EnterPriseComponent implements OnInit {
  id: String;
  user: Object;
  constructor() {
    this.user = {
      username: "1122",
      visible: false,
      switchBoolean: false,
    };
  }
  ngOnInit() {
    this.id = "1";
  }
  companyQuery(param: Object) {
    console.log(param);
  }
  close() {
    this.user["visible"] = false;
  }
}
