import { getRecipe } from '../../../api';
import React, { useState } from 'react';
import SearchRecipe from '../../shared/SearchRecipe/SearchRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import { IRecipe } from '../../../types/IRecipe';
import SortingParameters from '../../shared/SortingParameters/SortingParameters';
import Loader from '../../shared/Loader/Loader';

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
  const [isKeto, setIsKeto] = useState<boolean>(false);
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckboxVegan = (): void => {
    setIsVegan((prev) => !prev);
  };

  const handleCheckboxVegetarian = (): void => {
    setIsVegetarian((prev) => !prev);
  };

  const handleCheckboxKeto = (): void => {
    setIsKeto((prev) => !prev);
  };

  const handleCheckboxGlutenFree = (): void => {
    setIsGlutenFree((prev) => !prev);
  };

  const handleOnChange = (value: string) => {
    setInputValue(value);
  };

  const fetchRecipes = async (
    inputValue: string,
    vegan: boolean,
    vegetarian: boolean,
    isKeto: boolean,
    isGlutenFree: boolean,
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const dataRecipes = await getRecipe({
        inputValue,
        isVegan: vegan,
        isVegetarian: vegetarian,
        isKeto: isKeto,
        isGlutenFree: isGlutenFree,
      });
      setRecipes(dataRecipes.results);
    } catch (err) {
      setError('Ошибка загрузки рецептов. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fetchRecipes(inputValue, isVegan, isVegetarian, isKeto, isGlutenFree);
  };

  return (
    <>
      <SearchRecipe onChange={handleOnChange} searchValue={inputValue} handleClick={handleClick} />
      <SortingParameters
        onCheckboxVegan={handleCheckboxVegan}
        onCheckboxVegetarian={handleCheckboxVegetarian}
        onCheckboxKeto={handleCheckboxKeto}
        onCheckboxGlutenFree={handleCheckboxGlutenFree}
        isGlutenFree={isGlutenFree}
        isVegan={isVegan}
        isVegetarian={isVegetarian}
        isKeto={isKeto}
      />
      {isLoading && <Loader />}
      {error && <h1 className="recipe-cards-not-found">{error}</h1>}
      {recipes && <RecipeCard recipes={recipes} />}
    </>
  );
};

export default Recipes;
