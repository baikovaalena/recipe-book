export interface IRecipeDetails {
  name: string;
  steps: RecipeStep[];
}

interface RecipeStep {
  number: number;
  step: string;
  ingredients: IngredientDetails[];
  equipment: ToolDetails[];
}

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
