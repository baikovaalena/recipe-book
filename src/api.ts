const KEY_API = 'ed5cf03263f445839318bb8d41770361';

export const getRecipe = async (inputValue: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=${KEY_API}&number=5&addRecipeInformation=true`,
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
