import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PageComponent} from './page/page';
import {InputComponent} from './input/input';
import {DialogComponent} from './dialog/dialog';
import {ButtonComponent} from './button/button';
import {SwitchButtonComponent} from './switchButton/switchButton';
import './icon.less';
@NgModule({
    imports:[CommonModule,BrowserModule,HttpClientModule,FormsModule],//引入模块
    declarations: [PageComponent,InputComponent,DialogComponent,ButtonComponent,SwitchButtonComponent],//声明模块
    exports:[CommonModule,PageComponent,InputComponent,DialogComponent,ButtonComponent,SwitchButtonComponent]    //加载模块出口文件
  })
  export class indexModule{
    
  }