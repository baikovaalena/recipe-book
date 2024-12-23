import React, { useEffect, useState } from 'react';
import { getInstructionRecipe } from '../../../api';
import { useParams } from 'react-router';
import { RecipeStep } from '../../../types/IRecipeDetails';
import Loader from '../../shared/Loader/Loader';
import RecipeSteps from './RecipeSteps/RecipeSteps';

const RecipeInstruction = () => {
  const [instructionById, setInstructionById] = useState<RecipeStep[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    const fetchInstruction = async () => {
      setIsLoading(true);
      try {
        const dataRecipes = await getInstructionRecipe(params.id || '');
        setInstructionById(dataRecipes[0].steps);
      } catch (err) {
        setIsError('Ошибка загрузки рецептов. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstruction();
  }, [params]);

  return (
    <>
      {isLoading && <Loader />}

      {isError && <h1>Возникла ошибка, попробуйте снова</h1>}

      <RecipeSteps instructionById={instructionById} isLoading={isLoading} />
    </>
  );
};

export default RecipeInstruction;
