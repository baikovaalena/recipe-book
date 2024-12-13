import './RecipesCards.css';
import { IRecipe } from '../../../../types/IRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import './RecipesCardsMobileVersion/RecipesCardsMobileVersion.css';
import { useEffect, useState } from 'react';

interface IProps {
  isLoading: boolean;
  recipes: IRecipe[];
}

const RecipesCards = ({ isLoading, recipes }: IProps) => {
  return (
    <div className="recipes-cards">
      {recipes.length === 0 && !isLoading ? (
        <p className="recipes-cards__not-found">Пусто</p>
      ) : (
        <>
          {isLoading ? '' : <h1 className="recipes-cards__title">Найденные рецепты:</h1>}
          <ul className="recipes-cards__list">
            {recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} recipes={recipe} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipesCards;
