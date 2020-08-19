import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./../pages/app.component";
const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main/enterprise",
  },
  {
    path: "",
    loadChildren: "@/module/Login/Login.module#LoginModule",
  },
  {
    path: "main",
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: "@/module/Home/home.module#HomeModule",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class appRoutingModule {}
//export const routing = RouterModule.forRoot(appRoutes, { useHash: false });
