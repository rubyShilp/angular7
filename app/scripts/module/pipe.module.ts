import {NgModule} from '@angular/core';
import {BusinessLinePipe,BusinessTypePipe,EmergencyLevelPipe,StatePipe} from './../filter/pipeFilter';
@NgModule({
  declarations: [BusinessLinePipe,BusinessTypePipe,EmergencyLevelPipe,StatePipe],//声明模块
  exports:[BusinessLinePipe,BusinessTypePipe,EmergencyLevelPipe,StatePipe]    //加载模块出口文件
})
export class PipeModule{

}
