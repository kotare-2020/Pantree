import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, cloneDayRecipe } from '../actions/plan'



class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
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
              <div className=""><i onClick={this.handleClickUp} className="tiny material-icons clickable-icon">keyboard_arrow_left</i></div>

              <div className=""><i className="tiny material-icons clickable-icon" onClick={this.handleClickDown}>keyboard_arrow_right</i>
              </div>
            </div>

          </div>


        </>
      )
    }
  }

  export default connect()(PlanRecipeCard)
