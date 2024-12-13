import { Link } from 'react-router-dom';
import { IRecipeDetails } from '../../../../types/IRecipeDetails';
import './RecipeInstructionMarking.css';
import '../RecipeInstructionMarkingMobileVersion/RecipeInstructionMarkingMobileVersion.css';

interface IProps {
  instructionById: IRecipeDetails[];
  isLoading: boolean;
}

const RecipeInstructionMarking = ({ instructionById, isLoading }: IProps) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {isLoading ? '' : <h1 className="instruction-title">Инструкция</h1>}
      {instructionById.map((instructionRecipe) => {
        const steps = instructionRecipe.steps;
        return (
          <div className="container__recipe-steps" key={steps.length}>
            <Link to="/">
              <button className="recipe-steps-btn" key={steps.length - 1}>
                Назад
              </button>
            </Link>
            <div className="recipe-steps" key={steps.length}>
              {steps.map((instructionStep) => {
                const { number, step, ingredients, equipment } = instructionStep;
                return (
                  <div className="step" key={number}>
                    <h2 className="step-number">Шаг №{number}</h2>
                    <p className="step-description">{step}</p>
                    <h3 className="section-title">Ingredients:</h3>
                    <ul className="ingredients-list" key={2}>
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
                        <h3 className="section-title">Equipment:</h3>
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
                );
              })}
              <div className="container__recipe-steps-btn-scroll">
                <button
                  className="recipe-steps-btn-scroll"
                  key={steps.length - 1}
                  onClick={handleScroll}
                >
                  Наверх
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeInstructionMarking;
