import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { appRoutingModule } from "@/router/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JWTInterceptor } from "./../servers/JWTInterceptor";
import { PipeModule } from "./pipe.module";
//import { HomeModule } from "./Home/home.module";
//import { LoginModule } from "./Login/Login.module";
import { MainComponent } from "./../pages/Main/main";
import { AppComponent } from "./../pages/app.component";
import { coreModule } from "./util/core.module";
import { indexModule } from "./../directive/index.module";
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
    PipeModule,
    coreModule,
    indexModule,
  ], //引入模块
  declarations: [MainComponent, AppComponent], //声明需要加载的模块
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
  ],
  bootstrap: [MainComponent], //加载模块入口
})
export class AppModule {}
