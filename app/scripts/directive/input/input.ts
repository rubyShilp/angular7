import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
@Component({
  selector: "fa-input",
  templateUrl: "./input.html",
  styleUrls: [require("./input.less").toString()],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  constructor() {}
  @Input() type: string = "text";
  @Input() width: string;
  @Input() placeholder: string = "";
  @Input() maxlength: number;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();
  @Output() focue = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  private innerValue: any = "";
  focus: boolean = false;
  label: boolean = false;
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

  //点击
  handleClick() {
    this.click.next(this.value);
  }
  //
  focues() {
    this.focus = true;
    this.focue.next(this.value);
  }
  blurs() {
    this.focus = false;
    this.blur.next(this.value);
  }
  handleChange() {
    this.change.next(this.value);
  }
}
