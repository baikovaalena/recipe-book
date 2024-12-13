import React from 'react';
import './App.css';
import Header from './components/shared/Header/Header';
import Recipes from './components/pages/Recipes/Recipes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeasonRecipe from './components/pages/SeasonRecipe/SeasonRecipe';
import RecipeInstruction from './components/pages/RecipeInstruction/RecipeInstruction';

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
    path: '/season-recipe',
    element: (
      <>
        <Header />
        <SeasonRecipe />
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
