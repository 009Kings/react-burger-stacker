import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        return (
            <div className='pane'>
                <h3>Ingredients</h3>
                <ul className='stuff-list'>
                    <Ingredient />
                    <Ingredient />
                    <Ingredient />
                </ul>
            </div>
        )
    }
}

export default IngredientList;