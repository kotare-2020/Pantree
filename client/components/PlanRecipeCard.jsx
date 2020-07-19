import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, cloneDayRecipe } from '../actions/plan'

class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
  }

  handleClone = e => {
    const selectedDayNumber = this.props.dayNumber
    const currentDayColumn = this.props.days.find(day => day.dayNumber === selectedDayNumber)
    const recipeBeingCloned = this.props.recipe.recipeUuid
    this.props.dispatch(cloneDayRecipe(currentDayColumn, recipeBeingCloned))
  }

  render() {
    return (
      <>
        <div className="recipe-card">
          <h3>{this.props.recipe.recipeName}</h3>
          <button onClick={this.handleClick}>Remove</button>
          <i onClick={this.handleClone} className="tiny material-icons clickable-icon">content_copy</i>
        </div>
      </>
    )
  }
}

export default connect()(PlanRecipeCard)
