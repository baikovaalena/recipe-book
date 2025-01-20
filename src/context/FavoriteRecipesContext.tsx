import React, { createContext, useContext, useState } from 'react';
import { IFavoriteRecipe } from '../types/IFavoriteRecipe';

interface FavoriteRecipesContextType {
  favoriteRecipes: IFavoriteRecipe[];
  handleDeleteFavorite: (id: number) => void;
  handleSwitchFavoritesRecipe: (favoriteRecipe: IFavoriteRecipe) => void;
}

const FavoriteRecipesContext = createContext<FavoriteRecipesContextType | null>(null);

export const useFavoriteRecipes = () => {
  const context = useContext(FavoriteRecipesContext);
  if (!context) {
    throw new Error('useFavoriteRecipes must be used within a FavoriteRecipesProvider');
  }
  return context;
};

export const FavoriteRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<IFavoriteRecipe[]>(() => {
    const saved = localStorage.getItem('favoriteRecipes');
    return saved ? JSON.parse(saved) : [];
  });

  const handleDeleteFavorite = (id: number) => {
    const updatedFavorites = favoriteRecipes.filter((item) => item.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    setFavoriteRecipes(updatedFavorites);
  };

  const handleSwitchFavoritesRecipe = (favoriteRecipe: IFavoriteRecipe) => {
    const isIdComparison = favoriteRecipes.some((item) => item.id === favoriteRecipe.id);

    setFavoriteRecipes((prev) =>
      isIdComparison
        ? prev.filter((item) => item.id !== favoriteRecipe.id)
        : [...prev, favoriteRecipe],
    );
  };

  return (
    <FavoriteRecipesContext.Provider
      value={{ favoriteRecipes, handleDeleteFavorite, handleSwitchFavoritesRecipe }}
    >
      {children}
    </FavoriteRecipesContext.Provider>
  );
};
