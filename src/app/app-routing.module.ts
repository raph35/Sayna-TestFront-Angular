import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { ListCardComponent } from './list-card/list-card.component';
import { OverviewComponent } from './overview/overview.component';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  {
    path: "card",
    component: ListCardComponent
  },
  {
    path: 'payement',
    component: PayementComponent,
  },
  {
     path: "report",
     component: ListActivitiesComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
