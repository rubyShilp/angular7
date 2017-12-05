
import {NgModule} from '@angular/core';
import {CommonModule,HashLocationStrategy,LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './../router/router';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {JWTInterceptor} from './../servers/httpServe/JWTInterceptor';
import {PipeModule} from './pipe.module';
import { MainComponent}   from './../component/Main/main';
import { LoginComponent }      from './../component/Login/login';
import { AppComponent }   from './../component/app.component';
import {coreModule} from './util/core.module';
import {HomeModule} from './Home/home.module';
@NgModule({
  imports:      [ BrowserModule,CommonModule,FormsModule,HttpClientModule,routing,PipeModule,HomeModule,coreModule],//引入模块
  declarations: [ MainComponent,LoginComponent,AppComponent],//声明需要加载的模块
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}],
  bootstrap:[ MainComponent]//加载模块入口
})
export class AppModule{
  
}
