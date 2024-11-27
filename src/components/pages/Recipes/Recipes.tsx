import { getRecipe } from '../../../api';
import React, { useState } from 'react';
import SearchRecipe from '../../shared/SearchRecipe/SearchRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import { ApiResponse } from '../../../types/IRecipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState<ApiResponse>({
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  });
  const [inputValue, setInputValue] = useState<string>('');

  function handleClick(): void {
    fetchRecipes(inputValue);
    setInputValue('');
  }

  const handleOnChange = (value: string) => {
    setInputValue(value);
  };

  const fetchRecipes = async (inputValue: string) => {
    const dataRecipes = await getRecipe(inputValue);
    setRecipes(dataRecipes);
  };

  return (
    <div>
      <SearchRecipe
        handleOnChange={handleOnChange}
        searchValue={inputValue}
        handleClick={handleClick}
      />
      {recipes && <RecipeCard recipes={recipes} />}
    </div>
  );
};

export default Recipes;
