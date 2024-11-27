import React from 'react';
import './RecipeCard.css';
import { ApiResponse } from '../../../../types/IRecipe';

interface IProps {
  recipes: ApiResponse;
}

const RecipeCard = ({ recipes }: IProps) => {
  const results = recipes.results;
  return (
    <div className="recipe-cards">
      <h1 className="recipe-cards-title">Найденные рецепты:</h1>
      <ul className="recipe-cards-list">
        {results.map((parameters) => {
          return (
            <li key={parameters.id} className="card">
              <h4 className="recipe-title">{parameters.title}</h4>
              <img src={parameters.image} alt={parameters.title} />
              <div className="type-recepies">
                <p>Веган:{parameters.vegan ? 'Да' : 'Нет'}</p>
                <p>Вегетерианец:{parameters.vegetarian ? 'Да' : 'Нет'}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeCard;
