import './RecipesCards.css';
import { IRecipe } from '../../../../types/IRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import CheckBoxFavorites from '../../Favorites/CheckboxFavorites/CheckboxFavorites';
import { IFavoriteRecipe } from '../../../../types/IFavoriteRecipe';
import { useFavoriteRecipes } from '../../../../context/FavoriteRecipesContext';

interface IProps {
  recipes: IRecipe[];
}

const RecipesCards = ({ recipes }: IProps) => {
  const { favoriteRecipes, handleSwitchFavoritesRecipe } = useFavoriteRecipes();

  return (
    <div className="recipes-cards">
      {recipes.length === 0 ? (
        <p className="recipes-cards__not-found">Пусто</p>
      ) : (
        <>
          <h1 className="recipes-cards__title">Найденные рецепты:</h1>
          <ul className="recipes-cards__list">
            {recipes.map((recipe) => {
              const isChecked = favoriteRecipes.some((saveObject) => saveObject.id === recipe.id);

              const saveFavoritesRecipe: IFavoriteRecipe = {
                title: recipe.title,
                img: recipe.image,
                id: recipe.id,
              };

              return (
                <div className="cards" key={recipe.id}>
                  <div className="card__add-favorites">
                    <p className="favorites">Избранное</p>
                    <CheckBoxFavorites
                      onChangeFavorites={handleSwitchFavoritesRecipe}
                      isChecked={isChecked}
                      favoriteRecipe={saveFavoritesRecipe}
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
