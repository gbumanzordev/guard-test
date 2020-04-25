import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRouteComponent } from './components/second-route/second-route.component';
import { FirstRouteComponent } from './components/first-route/first-route.component';
import { RouteLoaderGuard } from './guards/route-loader.guard';

export const routes: Routes = [
  {
    path: '',
    component: FirstRouteComponent
  },
  {
    path: 'second-route',
    component: SecondRouteComponent,
    canActivate: [RouteLoaderGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
