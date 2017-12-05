
import {Component,Input} from '@angular/core';
import {Router } from "@angular/router";
import { HttpServe } from './../../../servers/httpServe/httpServe';
@Component({
    selector: "my-enterprise",
    templateUrl: './../../../../views/Home/Enterprise/enterprise.html',
    providers: [
        HttpServe
    ]
})

export class EnterPriseComponent {
    
}
