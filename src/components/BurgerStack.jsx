import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render() {
        let bits = this.props.burgerBits.map(bit => {
            return <li><Ingredient ingredient={bit} /></li>
        })

        return (
            <>
                <h5>Your burger here</h5>
                <ul className='burger'>
                    {bits}
                </ul>
            </>
        )
    }
}

export default BurgerStack