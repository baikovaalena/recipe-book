import './RecipeCard.css';
import { IRecipe } from '../../../../types/IRecipe';
import React, { useState } from 'react';

interface IProps {
  recipes: IRecipe[];
}

const RecipeCard = ({ recipes }: IProps) => {
  const [checkIdCards, setCheckIdCards] = useState<number[]>([]);
  const [isVisibleInfo, setIsVisibleInfo] = useState();

  function handleCheckId(id: number): void {
    setCheckIdCards((prev) =>
      prev.includes(id) ? prev.filter((itemCardID) => itemCardID !== id) : [...prev, id],
    );
  }

  return (
    <div className="recipe-cards">
      {recipes.length > 0 && (
        <>
          <h1 className="recipe-cards-title">Найденные рецепты:</h1>
          <ul className="recipe-cards-list">
            {recipes.map((parameters) => {
              const { id, title, image, vegan, vegetarian, diets } = parameters;
              const checkedId = checkIdCards.includes(id);
              return (
                <li key={id} className="card">
                  <h4 className="recipe-title">{title}</h4>
                  <img src={image} alt={title} />
                  <div className="type-recepies">
                    <h5 className="title-diets">Диеты:</h5>
                    <p className="vegan-diets">vegan: {vegan ? 'Да' : 'Нет'}</p>
                    <p className="vegetarian-diets">vegetarian: {vegetarian ? 'Да' : 'Нет'}</p>
                    <button onClick={() => handleCheckId(id)}>
                      {checkedId ? 'Скрыть' : 'Смотреть все'}
                    </button>
                    {checkedId &&
                      diets.map((diet, index) => (
                        <p key={index} className="name-diets">
                          {diet}: Да
                        </p>
                      ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipeCard;
