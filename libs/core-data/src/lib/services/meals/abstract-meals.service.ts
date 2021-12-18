import { Injectable } from '@angular/core';
import { CustomResponse } from '@nxm/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractMealsService {
  abstract filterByCategory$(category: string): Observable<CustomResponse>;
}
