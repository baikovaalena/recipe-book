import React, { useEffect, useState } from 'react';
import { getInstructionRecipe } from '../../../api';
import { useParams } from 'react-router';
import { IRecipeDetails } from '../../../types/IRecipeDetails';

import Loader from '../../shared/Loader/Loader';
import RecipeInstructionMarking from './RecipeInstructionMarking/RecipeInstructionMarking';

const RecipeInstruction = () => {
  const [instructionById, setInstructionById] = useState<IRecipeDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  let paramsId = useParams();
  let id = Number(paramsId.id);

  useEffect(() => {
    const fetchInstruction = async () => {
      setIsLoading(true);
      try {
        const dataRecipes = await getInstructionRecipe({ id });
        setInstructionById(dataRecipes);
      } catch (err) {
        setIsError('Ошибка загрузки рецептов. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchInstruction();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <h1>Возникла ошибка, попробуйте снова</h1>}
      <RecipeInstructionMarking instructionById={instructionById} isLoading={isLoading} />;
    </>
  );
};

export default RecipeInstruction;
