
import {Component,Input,OnInit} from '@angular/core';
import {Router } from "@angular/router";
import { HttpServe } from './../../../servers/httpServe/httpServe';
@Component({
    selector: "my-enterprise",
    templateUrl: './../../../../views/Home/Enterprise/enterprise.html',
    providers: [
        HttpServe
    ]
})

export class EnterPriseComponent implements OnInit{
    id:String;
    ngOnInit(){
        this.id='1'
    }
}
