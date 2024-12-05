import { IRecipe } from './IRecipe';

export interface IRecipeApiResponse {
  results: IRecipe[];
  offset: number;
  number: number;
  totalResults: number;
}
