import { Component, OnInit } from "@angular/core";
import { HttpServe } from "@/servers/httpServe/httpServe";
import { enterprise } from "./enterprise";
@Component({
  selector: "my-enterprise",
  templateUrl: "./enterprise.html",
  providers: [HttpServe],
})
export class EnterPriseComponent implements OnInit, enterprise {
  id: String;
  constructor() {}
  users: { username: String; visible: Boolean; switchBoolean: Boolean };
  ngOnInit() {
    this.id = "1";
    this.users = {
      username: "",
      visible: false,
      switchBoolean: false,
    };
  }
  companyQuery(param: Object) {
    console.log(param);
  }
  close() {
    this.users.visible = false;
  }
}
