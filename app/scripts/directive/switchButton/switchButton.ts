import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
@Component({
  selector: "fa-switch-button",
  templateUrl: "./switchButton.html",
  styleUrls: [require("./switchButton.less").toString()],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchButtonComponent),
      multi: true,
    },
  ],
})
export class SwitchButtonComponent implements ControlValueAccessor {
  @Input() leftName: String;
  @Input() rightName: String;
  @Input() width: number = 55;
  @Input() height: number = 22;
  @Input() color: String;
  @Input() bgColor: String;
  @Input() disabled: Boolean = false;
  private innerValue: any = "";
  public onTouchedCallback: () => void = function () {};
  private onChangeCallback: (_: any) => void = function () {};
  get value(): any {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
