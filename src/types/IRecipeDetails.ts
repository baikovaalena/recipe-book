interface IngredientDetails {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface ToolDetails {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface IRecipeStep {
  number: number;
  step: string;
  ingredients: IngredientDetails[];
  equipment: ToolDetails[];
}

export interface IRecipe {
  name: string;
  steps: IRecipeStep[];
}
