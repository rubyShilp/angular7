import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { EnterPriseComponent } from "@/pages/Home/Enterprise/enterpriseComponent";

export const routes: Routes = [
  {
    path: "enterprise",
    component: EnterPriseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingsModule {}
