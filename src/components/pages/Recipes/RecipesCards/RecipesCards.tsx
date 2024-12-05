import './RecipesCards.css';
import { IRecipe } from '../../../../types/IRecipe';
import RecipeCard from './RecipeCard/RecipeCard';
import './RecipesCardsMobileVersion/RecipesCardsMobileVersion.css';

interface IProps {
  recipes: IRecipe[];
  isLoading: boolean;
}

const RecipesCards = ({ recipes, isLoading }: IProps) => {
  return (
    <div className="recipes-cards">
      {recipes.length === 0 && !isLoading ? (
        <p className="recipes-cards__not-found">Пусто</p>
      ) : (
        <>
          {isLoading ? '' : <h1 className="recipes-cards__title">Найденные рецепты:</h1>}
          <ul className="recipes-cards__list">
            {recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipesCards;
