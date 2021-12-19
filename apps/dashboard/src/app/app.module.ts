import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractMealsService, CoreDataModule, MealsService, } from '@nxm/core-data';

import { AppComponent } from './app.component';
import { ShowErrorComponent } from './error/show-error.component';
import { MealsDetailsComponent } from './meals/meals-details/meals-details.component';
import { MealsListComponent } from './meals/meals-list/meals-list.component';
import { MealsComponent } from './meals/meals.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MealsListComponent,
    MealsDetailsComponent,
    MealsComponent,
    ShowErrorComponent,
  ],
  imports: [BrowserModule, CoreDataModule, RoutingModule],
  providers: [{ provide: AbstractMealsService, useClass: MealsService }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
