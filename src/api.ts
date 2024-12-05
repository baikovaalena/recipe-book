import { IRecipeApiResponse } from './types/IRecipeApiResponse';

const KEY_API = 'ed5cf03263f445839318bb8d41770361';

interface IRecipeGetParams {
  inputValue: string;
  isVegan: boolean;
  isVegetarian: boolean;
  isKeto: boolean;
  isGlutenFree: boolean;
}

const createRecipeParams = ({
  inputValue,
  isVegan,
  isVegetarian,
  isKeto,
  isGlutenFree,
}: IRecipeGetParams): URLSearchParams => {
  const params = new URLSearchParams({
    apiKey: KEY_API,
    number: '9',
    addRecipeInformation: 'true',
  });
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
