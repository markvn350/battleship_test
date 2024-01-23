import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes = [{
  path: "",
  component: HomeComponent,
  loadChildren: () => import("./modules/home/home.routes").then( m => m.homeRoutes )
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
