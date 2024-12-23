import { TSaveRecipe } from '../../../types/TSaveRecipe';
import { NavLink } from 'react-router';

const Favorites = () => {
  const storedData = localStorage.getItem('recipeData');
  const favoritesData = storedData ? JSON.parse(storedData) : [];

  return (
    <div>
      <h1>Избранное</h1>
      <ul className="recipes-cards__list">
        {favoritesData.map((saveObject: TSaveRecipe) => (
          <NavLink to={`/recipe-instructions/${saveObject.id}`} key={saveObject.id}>
            <li className="card">
              <p className="card__recipe-title">{saveObject.title}</p>
              <img src={saveObject.img} alt="" className="card__recipe-image" />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
