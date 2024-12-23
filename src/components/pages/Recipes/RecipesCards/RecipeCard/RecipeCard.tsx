import React, { useState } from 'react';
import { IRecipe } from '../../../../../types/IRecipe';
import placeholder from '../../../../../img/placeholder.jpeg';
import './RecipeCard.css';
import { NavLink } from 'react-router';

interface IProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IProps) => {
  const [isVisibleInfo, setIsVisibleInfo] = useState<boolean>(false);
  const [urlImage, setUrlImage] = useState<string>(recipe.image);

  const { title, diets } = recipe;

  const handleImageError = () => {
    setUrlImage(placeholder);
  };

  const handleOpenInfo = () => {
    setIsVisibleInfo((prev) => !prev);
  };

  return (
    <li className="card">
      <NavLink to={`/recipe-instructions/${recipe.id}`}>
        <h4 className="card__recipe-title">{title}</h4>
        <img src={urlImage} className="card__recipe-image" alt={title} onError={handleImageError} />
      </NavLink>
      <div className="card__recipe">
        <div className="card__recipe-diets-list">
          {diets.length > 0 && (
            <button onClick={handleOpenInfo} className="card__recipe-btn-check">
              Диеты
            </button>
          )}
          {isVisibleInfo &&
            diets.map((diet, index) => (
              <p key={index} className="card__recipe-name-diet">
                {diet}
              </p>
            ))}
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
