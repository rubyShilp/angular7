import {NgModule} from '@angular/core';
import {PipeModule} from './../pipe.module';
import { EnterPriseComponent } from './../../component/Home/Enterprise/enterpriseComponent';
@NgModule({
  imports:[PipeModule],
  declarations: [EnterPriseComponent],//声明模块
  exports:[EnterPriseComponent]    //加载模块出口文件
})
export class HomeModule{

}
