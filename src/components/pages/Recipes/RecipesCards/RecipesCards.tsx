import './RecipesCards.css';
import { IRecipe } from '../../../../types/IRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import React, { useEffect, useState } from 'react';
import CheckBoxFavorites from '../../Favorites/CheckboxFavorites/CheckboxFavorites';
import { TSaveRecipe } from '../../../../types/TSaveRecipe';

interface IProps {
  isLoading: boolean;
  recipes: IRecipe[];
}

const RecipesCards = ({ isLoading, recipes }: IProps) => {
  const [recipeData, setRecipeData] = useState<TSaveRecipe[]>([]);

  const handleSwitchFavoritesRecipe = (favoritesRecipe: TSaveRecipe) => {
    const isIdComparison = recipeData.some((item) => item.id === favoritesRecipe.id);

    setRecipeData((prev) =>
      isIdComparison
        ? prev.filter((item) => item.id !== favoritesRecipe.id)
        : [...prev, favoritesRecipe],
    );
  };

  useEffect(() => {
    localStorage.setItem('recipeData', JSON.stringify(recipeData));
  }, [recipeData]);

  return (
    <div className="recipes-cards">
      {recipes.length === 0 && !isLoading ? (
        <p className="recipes-cards__not-found">Пусто</p>
      ) : (
        <>
          {isLoading ? null : <h1 className="recipes-cards__title">Найденные рецепты:</h1>}

          <ul className="recipes-cards__list">
            {recipes.map((recipe) => {
              const saveFavoritesRecipe: TSaveRecipe = {
                title: recipe.title,
                img: recipe.image,
                id: recipe.id,
              };

              const isChecked = recipeData.some(
                (saveObject) => saveObject.id === saveFavoritesRecipe.id,
              );

              return (
                <div className="cards" key={recipe.id}>
                  <div className="card__add-favorites">
                    <p className="favorites">Избранное</p>
                    <CheckBoxFavorites
                      favoritesOnChange={handleSwitchFavoritesRecipe}
                      isChecked={isChecked}
                      saveRecipe={saveFavoritesRecipe}
                      id={recipe.id}
                    />
                  </div>
                  <RecipeCard recipe={recipe} />
                </div>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipesCards;
