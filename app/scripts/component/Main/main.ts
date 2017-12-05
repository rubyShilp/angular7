import {Component,OnInit} from "@angular/core";
@Component({
    selector: "my-main",
    template: '<router-outlet></router-outlet><fa-loading [(showHide)]="showHide" [(context)]="context"></fa-loading>'
})
export class MainComponent{
    public showHide:Boolean;
    public context:String;
}