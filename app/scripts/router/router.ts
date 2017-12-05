
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './../component/Login/login';
import { AppComponent }      from './../component/app.component';
import {EnterPriseComponent} from './../component/Home/Enterprise/enterpriseComponent';
const appRoutes: Routes = [
   {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: AppComponent,
    children:[
        {
          path: 'enterprise',
          component: EnterPriseComponent,
        }
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash: true});