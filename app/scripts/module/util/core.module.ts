import {NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Loading} from './../../util/component/loading/loading';
import {indexModule} from './../../directive/index.module';
@NgModule({
  imports:[BrowserModule,CommonModule,FormsModule,HttpClientModule,indexModule],//引入模块
  declarations: [Loading],//声明模块
  exports:[Loading]    //加载模块出口文件
})
export class coreModule{
  
}
