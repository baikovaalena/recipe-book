import { IRecipeApiResponse } from './types/IRecipeApiResponse';
import { IRecipe } from './types/IRecipeDetails';
import { ISortPrams } from './components/pages/Recipes/Recipes';
import { RecommendedWinesResponse } from './types/IWine';

const KEY_API = 'cbb93fe8a723455081d31f8c0e0ded9d';

interface IRecipeGetParams {
  inputValue: string;
  booleanParameters: ISortPrams;
  currentPage: number;
  numberOfCards: number;
}

interface IWineParams {
  valueNameWine: string;
  scoreWine: number;
}

const createRecipeParams = ({
  inputValue,
  booleanParameters,
  currentPage,
  numberOfCards,
}: IRecipeGetParams): URLSearchParams => {
  const params = new URLSearchParams({
    apiKey: KEY_API,
    number: numberOfCards.toString(),
    addRecipeInformation: 'true',
    addRecipeInstructions: 'true',
    offset: ((currentPage - 1) * numberOfCards).toString(),
  });

  const { isVegan, isKeto, isVegetarian, isGlutenFree } = booleanParameters;

  const diets = [];

  if (inputValue) {
    params.set('query', inputValue);
  }

  if (isVegan) {
    diets.push('vegan');
  }

  if (isVegetarian) {
    diets.push('vegetarian');
  }

  if (isKeto) {
    diets.push('ketogenic');
  }

  if (isGlutenFree) {
    diets.push('gluten-free');
  }

  if (diets.length) {
    params.set('diets', diets.join(','));
  }

  return params;
};

export const getRecipe = async (params: IRecipeGetParams): Promise<IRecipeApiResponse> => {
  const requestParams = createRecipeParams(params);

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${requestParams}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const getInstructionRecipe = async (id: string): Promise<IRecipe[]> => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${KEY_API}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const getRecommendationWine = async (
  params: IWineParams,
): Promise<RecommendedWinesResponse> => {
  const response = await fetch(
    `https://api.spoonacular.com/food/wine/recommendation?apiKey=${KEY_API}&wine=${params.valueNameWine}&minRating=${params.scoreWine}&number=10`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};
