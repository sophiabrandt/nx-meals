export enum DataState {
  LOADING_STATE = 'LOADING_STATE',
  LOADED_STATE = 'LOADED_STATE',
  ERROR_STATE = 'ERROR_STATE',
}

export interface BaseEntity {
  id: string | null;
}

export interface MealResponse extends BaseEntity {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strTags?: string;
  strYoutube?: string;
  strSource?: string;
  strImageSource?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

export interface Meal extends BaseEntity {
  name: string;
  image: string;
  id: string;
  category?: string;
  area?: string;
  instructions?: string;
  tags?: string;
  youtube?: string;
  source?: string;
  imageSource?: string;
  creativeCommonsConfirmed?: string;
  dateModified?: string;
}

export interface ApiResponse {
  meals: MealResponse[];
}

export interface CustomResponse {
  meals: Meal[];
}

export interface MealDataState<T> {
  dataState: DataState;
  data?: T;
  error?: string;
}
