const KEY_API = 'ed5cf03263f445839318bb8d41770361';

interface IProps {
  inputValue: string;
  isVegan: boolean;
  isVegetarian: boolean;
  isKeto: boolean;
  isGlutenFree: boolean;
}

export const getRecipe = async ({
  inputValue,
  isVegan,
  isVegetarian,
  isKeto,
  isGlutenFree,
}: IProps): Promise<any> => {
  const params = new URLSearchParams({
    apiKey: KEY_API,
    number: '5',
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
    params.set('query', diets.join(','));
  }

  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${params}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
