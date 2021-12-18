import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreDataModule, coreDataRoutes } from '@nxm/core-data';
import { CoreStateModule, coreStateRoutes } from '@nxm/core-state';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { MealsListComponent } from './meals/meals-list/meals-list.component';
import { MealsDetailsComponent } from './meals/meals-details/meals-details.component';
import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealsListComponent,
    MealsDetailsComponent,
    MealsComponent,
  ],
  imports: [BrowserModule, CoreDataModule, CoreStateModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
