import React from 'react';
import './App.css';
import Header from "./components/shared/Header/Header";
import SearchRecipe from "./components/shared/SearchRecipe/SearchRecipe";
import Recipes from "./components/pages/Recipes/Recipes";

function App() {
    return (
        <>
            <Header/>
            <Recipes/>
        </>
    )
}

export default App;
