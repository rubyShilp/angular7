import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PipeModule } from "../pipe.module";
import { directiveModule } from "../directive.module";
import { indexModule } from "../../directive/index.module";
import { LoginRoutingsModule } from "./login.routing.module";
import { LoginComponent } from "../../pages/Login/login";
@NgModule({
  imports: [
    FormsModule,
    directiveModule,
    PipeModule,
    indexModule,
    LoginRoutingsModule,
  ],
  declarations: [LoginComponent], //声明模块
  exports: [LoginComponent], //加载模块出口文件
})
export class LoginModule {}
