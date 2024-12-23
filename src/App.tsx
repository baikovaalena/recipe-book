import React from 'react';
import './App.css';
import Header from './components/shared/Header/Header';
import Recipes from './components/pages/Recipes/Recipes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeInstruction from './components/pages/RecipeInstruction/RecipeInstruction';
import Favorites from './components/pages/Favorites/Favorites';

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
