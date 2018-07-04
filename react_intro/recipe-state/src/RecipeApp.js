import React, { Component } from 'react';
import RecipeList from './recipe_list';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';
import Navbar from './navbar';

class RecipeApp extends Component {
constructor(props){
  super(props);
  this.state = {
    recipes: [
      {
        id: 0,
        title: "Sesame Noodles" ,
        ingredients: ['Cooked Noodles', 'Soy Sauce', 'Peanut Butter'],
        instructions: "Mix all ingredients in a bowl, serve cold",
        img: "noodles.jpg"
      },
      {
        id: 1,
        title: "Bok Choy" ,
        ingredients: ['Bok Choy', 'Garlic', 'Soy Sauce'],
        instructions: "Blanch the Bok Choy, Cover with garlic and soy sauce",
        img: "BokChoy.jpeg"
      },
      {
        id: 2,
        title: "Tuna Steak" ,
        ingredients: ['Ahi Grade Tuna', 'Sesame Seeds', 'Vinaigrette'],
        instructions: "Sear the Tuna, cover with Seeds and Vinaigrette, slice and serve it up!",
        img: "Tuna.jpg"
      }
    ],
    nextRecipeId: 3,
    showForm: false,
  }

  this.handleSave = this.handleSave.bind(this);
  this.onDelete = this.onDelete.bind(this);
}

handleSave(recipe){
  this.setState((prevState, props)=>{
    const newRecipe = {...recipe, id:this.state.nextRecipeId}
    return {
      nextRecipeId: prevState.nextRecipeId + 1,
      recipes: [...this.state.recipes, newRecipe],
      showForm: false
    }
  });
}

onDelete(id){
  const recipes = this.state.recipes.filter(r => r.id !== id);
  this.setState({recipes});
}

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={()=> this.setState({showForm:true})}/>
        {showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={()=> this.setState({showForm:false})}
            /> : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>

    );
  }
}

export default RecipeApp;
