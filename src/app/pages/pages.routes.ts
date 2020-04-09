import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from '@angular/core';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graficas1', component: Graficas1Component },
    { path: 'accountsettings', component: AccountsettingsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
