import React, { Component } from 'react'
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

class App extends Component {
  render() {
    return (
      <main>
        <h1>Burger Stacker</h1>
        <div className='panes'>
          <IngredientList />
          <BurgerPane />
        </div>
      </main>
    )
  }
}

export default App
