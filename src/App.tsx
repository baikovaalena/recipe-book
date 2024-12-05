import React from 'react';
import './App.css';
import Header from './components/shared/Header/Header';
import Recipes from './components/pages/Recipes/Recipes';

function App() {
  return (
    <>
      <Header />
      <Recipes />
    </>
  );
}

export default App;
