import React from 'react'
import { connect } from 'react-redux'

import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, moveRecipeCardLeft, moveRecipeCardRight, cloneDayRecipe } from '../actions/plan'



class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
  }

  handleLeftOrRight = e => {
    switch (e.target.innerHTML) {
      case "keyboard_arrow_left":
        this.props.dispatch(
          moveRecipeCardLeft(this.props.dayNumber, this.props.recipe)
        )
        break

      // case "keyboard_arrow_right":
      //   this.props.dispatch(
      //     moveRecipeCardRight(this.props.plans, this.props.dayNumber, this.props.recipe.recipeUuid)
      //   )
      //   break

      default:
        break
    }
  }

  handleClickDown = () => {
    this.props.dispatch(
      moveRecipeCardDown(this.props.recipe.recipeUuid, this.props.dayNumber)
    )

  }

  handleClickUp = () => {
    this.props.dispatch(
      moveRecipeCardUp(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
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
        <div className="card">
          <div className="delete-container">
            <i className=" delete material-icons clickable-icon" onClick={this.handleClick}>delete</i>
          </div>
          <i onClick={this.handleClone} className="tiny material-icons clickable-icon">content_copy</i>
          <span className="card-title">{this.props.recipe.recipeName}</span>
          <div className="container-arrow-up-down">
            <div className=""><i className="tiny material-icons clickable-icon" onClick={this.handleClickUp}>keyboard_arrow_up</i>
            </div>
            <div className=""><i className="tiny material-icons clickable-icon " onClick={this.handleClickDown}>keyboard_arrow_down</i></div>
          </div>
          <div className="container-arrow-left-right">

            {this.props.dayNumber != 1 
            ?
              <div><i className="tiny material-icons clickable-icon" onClick={this.handleLeftOrRight} >keyboard_arrow_left</i></div>
            : 
              <div></div>}

            {this.props.dayNumber != 7
            ?
              <div><i className="tiny material-icons clickable-icon" onClick={this.handleLeftOrRight}>keyboard_arrow_right</i></div>
            :
              <div></div>
            }
            
          </div>
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
