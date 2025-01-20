import { useNavigate } from 'react-router-dom';
import { IRecipeStep } from '../../../../types/IRecipeDetails';
import './RecipeSteps.css';

interface IProps {
  instructionById: IRecipeStep[];
}

const RecipeSteps = ({ instructionById }: IProps) => {
  const navigate = useNavigate();
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container__instruction">
      <h1 className="instruction-title">Инструкция</h1>
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}
        className="recipe-steps-btn"
      >
        Назад
      </button>

      {instructionById.map((instructionRecipe) => {
        const { step, ingredients, equipment, number } = instructionRecipe;

        return (
          <div className="container__recipe-steps" key={step}>
            <div className="recipe-steps">
              <div className="step">
                <p className="step-number">Шаг №{number}</p>
                <p className="step-description">{step}</p>
                <h2 className="section-title">Ingredients:</h2>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient) => {
                    return (
                      <li className="ingredient" key={ingredient.id}>
                        <img
                          className="ingredient-image"
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                          alt={ingredient.localizedName}
                        />
                        {ingredient.localizedName}
                      </li>
                    );
                  })}
                </ul>

                {equipment.length > 0 && (
                  <>
                    <h2 className="section-title">Equipment:</h2>
                    <ul className="equipment-list">
                      {equipment.map((equipment) => (
                        <li className="equipment" key={equipment.name}>
                          <img
                            className="equipment-image"
                            src={equipment.image}
                            alt={equipment.localizedName}
                          />
                          {equipment.localizedName}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="container__recipe-steps-btn-scroll">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="recipe-steps-btn"
        >
          Назад
        </button>

        <button className="recipe-steps-btn-scroll" onClick={handleScroll}>
          Наверх
        </button>
      </div>
    </div>
  );
};

export default RecipeSteps;
