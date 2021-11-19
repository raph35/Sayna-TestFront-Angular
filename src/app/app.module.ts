import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OverviewComponent } from './overview/overview.component';
import { ListCardComponent } from './list-card/list-card.component';
import { LimitComponent } from './limit/limit.component';
import { PayementComponent } from './payement/payement.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { ActivitieComponent } from './activitie/activitie.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OverviewComponent,
    ListCardComponent,
    LimitComponent,
    PayementComponent,
    ListActivitiesComponent,
    ActivitieComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
