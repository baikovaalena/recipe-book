import { IFavoriteRecipe } from '../../../types/IFavoriteRecipe';
import './Favorites.css';
import { NavLink } from 'react-router';
import { useFavoriteRecipes } from '../../../context/FavoriteRecipesContext';

const Favorites = () => {
  const { favoriteRecipes, handleDeleteFavorite } = useFavoriteRecipes();

  return (
    <div className="favorites_page">
      <h1 className="favorites__header">Избранное</h1>
      <ul className="recipes-cards__list">
        {favoriteRecipes.map((saveObject: IFavoriteRecipe) => (
          <div key={saveObject.id}>
            <button
              className="delete-card__favorite"
              onClick={() => handleDeleteFavorite(saveObject.id)}
            >
              Удалить
            </button>
            <NavLink to={`/recipe-instructions/${saveObject.id}`}>
              <li className="card">
                <p className="card__recipe-title">{saveObject.title}</p>
                <img src={saveObject.img} alt="" className="card__recipe-image" />
              </li>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
