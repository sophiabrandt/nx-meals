import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealsListComponent } from './meals/meals-list/meals-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsListComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
