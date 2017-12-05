import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Params  } from "@angular/router";
import { HttpServe } from './../servers/httpServe/httpServe';
import {Users} from './../mock/Login/login.mock';
@Component({
  selector: 'my-app',
  templateUrl:'./../../views/main.html',
  providers:[
    HttpServe
  ] 
})
export class AppComponent{
   
}
