import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PipeModule} from './../pipe.module';
import {directiveModule} from './../directive.module';
import {indexModule} from './../../directive/index.module';
import { EnterPriseComponent } from './../../component/Home/Enterprise/enterpriseComponent';
@NgModule({
  imports:[BrowserModule,FormsModule,directiveModule,PipeModule,indexModule],
  declarations: [EnterPriseComponent],//声明模块
  exports:[EnterPriseComponent]    //加载模块出口文件
})
export class HomeModule{

}
