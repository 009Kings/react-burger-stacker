import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {

    render() {
        return (
            <>
                <h5>Your burger here</h5>
                <ul className='burger'>
                    <Ingredient />
                </ul>
            </>
        )
    }
}

export default BurgerStack