import {Component,Input,OnInit} from '@angular/core';
@Component({
    selector: "fa-loading",
    templateUrl: './loading.html',
})
export class Loading{
    @Input() showHide:Boolean;
    @Input() context:String;
}