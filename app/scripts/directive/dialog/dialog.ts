import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "fa-dialog",
  templateUrl: "./dialog.html",
  styleUrls: ["./dialog.less"],
})
export class DialogComponent {
  @Input() title: string;
  @Input() visible: boolean;
  @Input() width: number = 400;
  @Input() height: number = 400;
  @Input() isClose: boolean = true;
  @Output() beforeClose = new EventEmitter();
  //关闭弹出框
  close() {
    this.beforeClose.next();
  }
}
