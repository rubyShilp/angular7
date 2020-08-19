import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PipeModule } from "./../pipe.module";
import { directiveModule } from "./../directive.module";
import { indexModule } from "./../../directive/index.module";
import { HomeRoutingsModule } from "./home.routing.module";
import { EnterPriseComponent } from "@/pages/Home/enterpriseComponent";
@NgModule({
  imports: [
    FormsModule,
    directiveModule,
    PipeModule,
    indexModule,
    HomeRoutingsModule,
  ],
  declarations: [EnterPriseComponent], //声明模块
  exports: [EnterPriseComponent], //加载模块出口文件
})
export class HomeModule {}
