import { Component, OnInit } from '@angular/core';
import { CustomResponse, DataState, MealDataState } from '@nxm/api-interfaces';
import { AbstractMealsService } from '@nxm/core-data';
import { catchError, map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'nxm-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {

  mealState$: Observable<MealDataState<CustomResponse>> = of({
    dataState: DataState.LOADING_STATE,
  });

  readonly DataState = DataState;

  constructor(private mealsService: AbstractMealsService) {}

  ngOnInit(): void {
    this.mealState$ = this.mealsService.filterByCategory$('Seafood').pipe(
      map((response) => {
        return {
          dataState: DataState.LOADED_STATE,
          data: response,
        };
      }),
      startWith({
        dataState: DataState.LOADING_STATE,
      }),
      catchError((error: string) => {
        return of({
          dataState: DataState.ERROR_STATE,
          error,
        });
      })
    );
  }
}
