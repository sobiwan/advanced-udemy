import React, { Component } from 'react';
import RecipeList from './recipe_list';
import './RecipeApp.css';
import Navbar from './navbar';

class RecipeApp extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <RecipeList />
      </div>

    );
  }
}

export default RecipeApp;
