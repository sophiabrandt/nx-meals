import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  { path: '', component: MealsComponent },
  { path: 'meals', component: MealsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {
}
