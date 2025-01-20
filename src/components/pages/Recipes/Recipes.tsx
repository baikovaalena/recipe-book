import { getRecipe } from '../../../api';
import React, { useEffect, useState } from 'react';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import RecipesCards from './RecipesCards/RecipesCards';
import { IRecipe } from '../../../types/IRecipe';
import SortingParameters from './SortingParameters/SortingParameters';
import Loader from '../../shared/Loader/Loader';
import { TCheckboxSort } from '../../../types/TCheckboxSort';
import { paginationResponse } from '../../../types/IRecipeApiResponse';
import Pagination from './Pagination/Pagination';
import useDebounce from './useDebounce';

export interface ISortPrams {
  isVegan: boolean;
  isVegetarian: boolean;
  isKeto: boolean;
  isGlutenFree: boolean;
}

const getInitPage = () => {
  const sessionPage = sessionStorage.getItem('page');

  if (sessionPage && !isNaN(Number(sessionPage))) {
    return Number(sessionPage);
  }

  return null;
};

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [booleanParameters, setBooleanParameters] = useState<ISortPrams>({
    isVegan: false,
    isVegetarian: false,
    isKeto: false,
    isGlutenFree: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [dataPagination, setDataPagination] = useState<paginationResponse | null>(null);
  const [numberOfCards, setNumberOfCards] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounce = useDebounce(inputValue);

  const handleCheckboxSortType = (sortType: TCheckboxSort) => {
    switch (sortType) {
      case 'vegan':
        setBooleanParameters((prev) => ({ ...prev, isVegan: !prev.isVegan }));
        break;

      case 'vegetarian':
        setBooleanParameters((prev) => ({ ...prev, isVegetarian: !prev.isVegetarian }));
        break;

      case 'ketogenic':
        setBooleanParameters((prev) => ({ ...prev, isKeto: !prev.isKeto }));
        break;

      case 'glutenFree':
        setBooleanParameters((prev) => ({ ...prev, isGlutenFree: !prev.isGlutenFree }));
        break;
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setCurrentPage(1);
    setDataPagination(null);
  };

  const handleInfoForPagination = (numberPage: number) => {
    setCurrentPage(numberPage);
  };

  const handleNumberOfCards = (number: number) => {
    setNumberOfCards(number);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      sessionStorage.removeItem('recipes');

      setIsLoading(true);
      setError(null);

      try {
        const dataRecipes = await getRecipe({
          inputValue: debounce,
          booleanParameters,
          currentPage,
          numberOfCards,
        });

        sessionStorage.setItem('recipes', JSON.stringify(dataRecipes.results));

        setRecipes(dataRecipes.results);

        setDataPagination({
          offset: dataRecipes.offset,
          number: dataRecipes.number,
          totalResults: dataRecipes.totalResults,
        });
      } catch (err) {
        setError('Ошибка загрузки рецептов. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [debounce, booleanParameters, numberOfCards, currentPage]);

  useEffect(() => {
    const sessionRecipe = sessionStorage.getItem('recipes');

    if (sessionRecipe !== null) {
      setRecipes(JSON.parse(sessionRecipe));
    }
  }, []);

  return (
    <>
      <SearchRecipe onChange={handleInputChange} searchValue={inputValue} />
      <SortingParameters
        onCheckboxDiets={handleCheckboxSortType}
        parameters={booleanParameters}
        onChangeNumberOfCards={handleNumberOfCards}
      />

      {isLoading && <Loader />}

      {error && <h1 className="recipes-cards__not-found">{error}</h1>}

      {recipes && !isLoading && <RecipesCards recipes={recipes} />}

      {!isLoading && dataPagination && (
        <Pagination
          dataPagination={dataPagination}
          onChangeInfoForPagination={handleInfoForPagination}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Recipes;
