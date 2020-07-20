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
          {/* <button onClick={this.handleClickDown}>Down</button> */}
          {/* <button onClick={this.handleClickUp}>Up</button> */}

          <a onClick={this.handleClickUp} class="btn-small"><i class="material-icons">keyboard_arrow_up</i></a>
          <a onClick={this.handleClickDown} class="btn-small"><i class="material-icons">keyboard_arrow_down</i></a>

          {/* <i onClick={this.handleClickUp} className="tiny material-icons clickable-icon">keyboard_arrow_up</i>
          <i onClick={this.handleClickDown} className="tiny material-icons clickable-icon">keyboard_arrow_down</i> */}

          {/* <i onClick={this.handleClone} className="tiny material-icons clickable-icon">content_copy</i> */}

        </div>

      </>
    )
  }
}

export default connect()(PlanRecipeCard)
