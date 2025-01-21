import React from 'react';
import Header from './components/shared/Header/Header';
import Recipes from './components/pages/Recipes/Recipes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeInstruction from './components/pages/RecipeInstruction/RecipeInstruction';
import Favorites from './components/pages/Favorites/Favorites';
import { FavoriteRecipesProvider } from './context/FavoriteRecipesContext';
import RecommendationWine from './components/pages/Wine/RecomendationWine';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Recipes />
      </>
    ),
  },
  {
    path: `/recipe-instructions/:id`,
    element: (
      <>
        <Header />
        <RecipeInstruction />
      </>
    ),
  },
  {
    path: `/favorites`,
    element: (
      <>
        <Header />
        <Favorites />
      </>
    ),
  },
  {
    path: `/wine`,
    element: (
      <>
        <Header />
        <RecommendationWine />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <FavoriteRecipesProvider>
        <RouterProvider router={router} />
      </FavoriteRecipesProvider>
    </>
  );
}

export default App;
