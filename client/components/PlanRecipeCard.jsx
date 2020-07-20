import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp } from '../actions/plan'



class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
  }

  handleClickDown =()=>{
   this.props.dispatch(
     moveRecipeCardDown(this.props.recipe.recipeUuid, this.props.dayNumber)
   )

  }

  handleClickUp =()=>{
    this.props.dispatch(
      moveRecipeCardUp(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
 
   }

  render() {
    return (
      <>
        <div className="recipe-card">
          <h3>{this.props.recipe.recipeName}</h3>
          <button onClick={this.handleClick}>Remove</button>
          <button onClick={this.handleClickDown}>Down</button>
          <button onClick={this.handleClickUp}>Up</button>
        </div>

      </>
    )
  }
}

export default connect()(PlanRecipeCard)
