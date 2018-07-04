import React, { Component } from 'react';
import "./recipe_list.css";
import PropTypes from 'prop-types';
import Recipe from './recipe';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Pasta" ,
                ingredients: ['Flour', 'Water'],
                instructions: "Mix ingredients",
                img: "light-fettucine-alfredo.jpg"
            },
            {
                title: "Bok Choy" ,
                ingredients: ['Bok Choy', 'Garlic', 'Soy Sauce'],
                instructions: "Blanch the Bok Choy, Cover with garlic and soy sauce",
                img: "BokChoy.jpeg"
            },
            {
                title: "Tuna Steak" ,
                ingredients: ['Ahi Grade Tuna', 'Sesame Seeds', 'Vinaigrette'],
                instructions: "Sear the Tuna, cover with Seeds and Vinaigrette, slice and serve it up!",
                img: "Tuna.jpg"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render () {
        const recipies = this.props.recipes.map((r, index)=> (
            <Recipe key ={index} {...r} />
        ));

        return (
            <div className="recipe-list">
                {recipies}
            </div>
        )
    }
}

export default RecipeList;