import { getRecipe } from '../../../api';
import React, { useState } from 'react';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import RecipesCards from './RecipesCards/RecipesCards';
import { IRecipe } from '../../../types/IRecipe';
import SortingParameters from './SortingParameters/SortingParameters';
import Loader from '../../shared/Loader/Loader';
import { TCheckboxSort } from '../../../types/TCheckboxSort';

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
  const [isKeto, setIsKeto] = useState<boolean>(false);
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckboxSortType = (sortType: TCheckboxSort) => {
    switch (sortType) {
      case 'vegan':
        setIsVegan((prev) => !prev);
        break;
      case 'vegetarian':
        setIsVegetarian((prev) => !prev);
        break;
      case 'ketogenic':
        setIsKeto((prev) => !prev);
        break;
      case 'glutenFree':
        setIsGlutenFree((prev) => !prev);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const dataRecipes = await getRecipe({
        inputValue,
        isVegan,
        isVegetarian,
        isKeto,
        isGlutenFree,
      });
      setRecipes(dataRecipes.results);
    } catch (err) {
      setError('Ошибка загрузки рецептов. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchRecipe onChange={handleInputChange} searchValue={inputValue} onSearch={fetchRecipes} />
      <SortingParameters
        onCheckboxDiets={handleCheckboxSortType}
        isGlutenFree={isGlutenFree}
        isVegan={isVegan}
        isVegetarian={isVegetarian}
        isKeto={isKeto}
      />
      {isLoading && <Loader />}
      {error && <h1 className="recipes-cards__not-found">{error}</h1>}
      {recipes && <RecipesCards recipes={recipes} isLoading={isLoading} />}
    </>
  );
};

export default Recipes;
