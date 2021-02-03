import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    printCat = () => {
        console.log('🦊')
    }

    render() {
        // iterate over the ingredients, return an li with Ingredient component, given the ingredient
        let ingredients = this.props.ingredients.map(elem => {
            return <li onClick={this.props.add}><Ingredient ingredient={elem} /></li>
        })

        return (
            <div className='pane'>
                <h3 onClick={this.printCat}>Ingredients</h3>
                <ul className='stuff-list'>
                    {ingredients}
                </ul>
            </div>
        )
    }
}

export default IngredientList;