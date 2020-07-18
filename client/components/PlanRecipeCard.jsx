import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe } from '../actions/plan'

class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeId, this.props.dayNumber)
    )
  }

<<<<<<< HEAD
  render(){
    
=======
  render() {
>>>>>>> 5b8f65612b5c718a36fcb876bdd1198127ac3652
    return (
      <>
        <div className="recipe-card">
          <h3>{this.props.recipe.recipeName}</h3>
          <button onClick={this.handleClick}>Remove</button>
        </div>
      </>
    )
  }
}

export default connect()(PlanRecipeCard)
