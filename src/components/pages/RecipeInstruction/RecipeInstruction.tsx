import React, { useEffect, useState } from 'react';
import { getInstructionRecipe } from '../../../api';
import { useParams } from 'react-router';
import { IRecipeStep } from '../../../types/IRecipeDetails';
import Loader from '../../shared/Loader/Loader';
import RecipeSteps from './RecipeSteps/RecipeSteps';

const RecipeInstruction = () => {
  const [recipeStep, setRecipeStep] = useState<IRecipeStep[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    const fetchInstruction = async () => {
      setIsLoading(true);
      try {
        const dataRecipes = await getInstructionRecipe(params.id || '');
        setRecipeStep(dataRecipes[0].steps);
      } catch (err) {
        setError('Ошибка загрузки рецептов. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstruction();
  }, [params]);

  return (
    <>
      {isLoading && <Loader />}

      {error && <h1>Возникла ошибка, попробуйте снова</h1>}

      {!isLoading && <RecipeSteps instructionById={recipeStep} />}
    </>
  );
};

export default RecipeInstruction;
