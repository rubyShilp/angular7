import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'fa-dialog',
    templateUrl:'./dialog.html',
    styles:[require('./dialog.less').toString()]
})
export class DialogComponent{
    @Input() title:String;
    @Input() visible:Boolean;
    @Input() width:Number=400;
    @Input() height:Number=400;
    @Input() isClose:Boolean=true;
    @Output() beforeClose=new EventEmitter();
    //关闭弹出框
    close(){
        this.beforeClose.next();
    }
}