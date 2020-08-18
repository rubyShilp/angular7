import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
@Component({
  selector: "fa-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.less"],
})
export class ButtonComponent implements OnInit {
  className: String;
  @Input() icon: string;
  @Input() height: number = 32;
  @Input() width: number = 80;
  @Input() left: boolean = true;
  @Input() right: boolean = false;
  @Input() type: string = "own";
  @Input() plain: boolean = false;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();
  //初始化参数值,并显示不同按钮主题颜色
  ngOnInit() {
    this.buttonType();
    this.iconRightLeft();
  }
  //单击
  eventClick() {
    if (this.disabled) {
      return;
    }
    this.click.next();
  }
  //判断icon显示位置
  iconRightLeft() {
    if (this.left && this.right) {
      this.left = false;
    } else if (this.left && !this.right) {
      this.left = true;
    } else if (!this.left && this.right) {
      this.right = true;
    } else if (!this.left && this.right) {
      this.icon = "";
    }
  }
  //按钮主题颜色选择
  buttonType() {
    if (this.type === "primary") {
      this.className = "fa-button-primary";
      if (this.plain) {
        this.className += " is-plain-primary";
      }
    } else if (this.type === "success") {
      this.className = "fa-button-success";
      if (this.plain) {
        this.className += " is-plain-success";
      }
    } else if (this.type === "info") {
      this.className = "fa-button-info";
      if (this.plain) {
        this.className += " is-plain-info";
      }
    } else if (this.type === "warning") {
      this.className = "fa-button-warning";
      if (this.plain) {
        this.className += " is-plain-warning";
      }
    } else if (this.type === "danger") {
      this.className = "fa-button-danger";
      if (this.plain) {
        this.className += " is-plain-danger";
      }
    } else if (this.type === "own") {
      this.className = "fa-button-own";
      if (this.plain) {
        this.className += " is-plain-own";
      }
    }
    if (this.disabled) {
      this.className = "fa-button-disabled";
    }
  }
}
