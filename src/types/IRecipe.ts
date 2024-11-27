interface IRecipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName?: string;
  pricePerServing: number;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  license?: string;
  author?: string;
}

export interface ApiResponse {
  results: IRecipe[];
  offset: number;
  number: number;
  totalResults: number;
}
