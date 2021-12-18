import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://www.themealdb.com/api/json/v1/1',
});
