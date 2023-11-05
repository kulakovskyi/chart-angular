import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard-one', pathMatch: 'full'},
  {path: 'dashboard-one', loadChildren: () => import('./dashboard-one/dashboard-one.module').then(x => x.DashboardOneModule)},
  {path: 'dashboard-two', loadChildren: () => import('./dashboard-two/dashboard-two.module').then(x => x.DashboardTwoModule)},
  {path: 'dashboard-three', loadChildren: () => import('./dashboard-three/dashboard-three.module').then(x => x.DashboardThreeModule)},
  {path: 'dashboard-fourth', loadChildren: () => import('./dashboard-fourth/dashboard-fourth.module').then(x => x.DashboardFourthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
