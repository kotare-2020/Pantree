import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, cloneDayRecipe, moveRecipeLeft, moveRecipeRight } from '../actions/plan'

class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
  }

  handleLeftOrRight = e => {
    switch (e.target.innerHTML) {
      case "arrow_back":
        this.props.dispatch(
          moveRecipeLeft(this.props.dayNumber, this.props.recipe)
        )
        break

      // case "arrow_forward":
      //   this.props.dispatch(
      //     moveRecipeRight(this.props.plans, this.props.dayNumber, this.props.recipe.recipeUuid)
      //   )
      //   break

      default:
        break
    }
  }

  handleClone = e => {
    const selectedDayNumber = this.props.dayNumber
    const currentDayColumn = this.props.days.find(day => day.dayNumber === selectedDayNumber)
    const recipeBeingClonedUuid = this.props.recipe.recipeUuid
    this.props.dispatch(cloneDayRecipe(currentDayColumn, recipeBeingClonedUuid))
  }

  render() {
    return (
      <>
        <div className="recipe-card">
          <h3>{this.props.recipe.recipeName}</h3>
          <button onClick={this.handleClick}>Remove</button>
          <i onClick={this.handleClone} className="tiny material-icons clickable-icon">content_copy</i>
          {this.props.dayNumber != 1 && <i onClick={this.handleLeftOrRight} className="tiny material-icons clickable-icon">arrow_back</i>}
          {this.props.dayNumber != 7 && <i onClick={this.handleLeftOrRight} className="tiny material-icons clickable-icon">arrow_forward</i>}
        </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    plans: globalState.plans
  }
}

export default connect(mapStateToProps)(PlanRecipeCard)
