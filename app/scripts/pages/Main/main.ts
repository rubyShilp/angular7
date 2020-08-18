import { Component } from "@angular/core";
@Component({
  selector: "my-main",
  template: `<fa-loading
    [(showHide)]="showHide"
    [(context)]="context"
  ></fa-loading>`,
})
export class MainComponent {
  public showHide: Boolean;
  public context: String;
}
