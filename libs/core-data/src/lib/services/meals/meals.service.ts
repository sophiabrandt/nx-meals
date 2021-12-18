import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  ApiResponse,
  CustomResponse,
  Meal,
  MealResponse,
} from '@nxm/api-interfaces';
import { BASE_URL } from '@nxm/shared';
import {
  catchError,
  map,
  Observable,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { AbstractMealsService } from './abstract-meals.service';

@Injectable({
  providedIn: 'root',
})
export class MealsService implements AbstractMealsService {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {}

  filterByCategory$ = (category: string): Observable<CustomResponse> =>
    this.http.get<ApiResponse>(`${this.baseUrl}/filter.php?c=${category}`).pipe(
      tap((response) =>
        console.log(`%c${JSON.stringify(response)}`, 'color: green;')
      ),
      map((response: ApiResponse) => {
        return {
          meals: response.meals?.map((meal: MealResponse) =>
            this.mapApiMealToCustomMeal(meal)
          ),
        };
      }),
      shareReplay({bufferSize: 1, refCount: true}),
      catchError(this.handleError)
    );

  private mapApiMealToCustomMeal(meal: MealResponse): Meal {
    return {
      name: meal.strMeal,
      image: meal.strMealThumb,
      id: meal.idMeal,
      category: meal.strCategory,
      area: meal.strArea,
      instructions: meal.strInstructions,
      tags: meal.strTags,
      youtube: meal.strYoutube,
      source: meal.strSource,
      imageSource: meal.strImageSource,
      creativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
      dateModified: meal.dateModified,
    };
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
