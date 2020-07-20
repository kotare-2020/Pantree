import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, moveRecipeCardLeft, moveRecipeCardRight, cloneDayRecipe } from '../actions/plan'

import { clearSelectedDay } from '../actions/selectedDay'
import { Link } from 'react-router-dom'




class PlanRecipeCard extends React.Component {
  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.recipe.recipeUuid, this.props.dayNumber)
    )
  }

  handleClickLeft = () => {
    this.props.dispatch(
      moveRecipeCardLeft(this.props.dayNumber, this.props.recipe)
    )
  }

  handleClickRight = () => {
    this.props.dispatch(
      moveRecipeCardRight(this.props.dayNumber, this.props.recipe)
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

  handleClickTitle = () => {
    this.props.dispatch(clearSelectedDay())
      // .then(() => {
    // return   this.props.history.push(`/recipes/${this.props.recipe.recipeId}`)
      // })

  }

  render() {


    return (
      <>
        <div className="card card-container">
          <div className="delete-container">
            <i className="xs-icon material-icons clickable-icon" onClick={this.handleClone}>content_copy</i>
            <i className="xs-icon material-icons clickable-icon delete" onClick={this.handleClick}>delete</i>
          </div>

          <Link  to={`/recipes/${this.props.recipe.recipeId}`} onClick={this.handleClickTitle} ><span className="card-title">{this.props.recipe.recipeName}</span></Link>

          <div className="arrow-container">
            <div className="container-arrow-left-right">
              {this.props.dayNumber != 1
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickLeft} >keyboard_arrow_left</i>
                :
                <i className="tiny material-icons hidden-icon" onClick={this.handleClickLeft} >keyboard_arrow_left</i>
              }
              {this.props.dayNumber != 7
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickRight}>keyboard_arrow_right</i>
                :
                <i className="tiny material-icons hidden-icon" onClick={this.handleClickLeft} >keyboard_arrow_left</i>
              }
            </div>

            <div className="container-arrow-up-down">
              <i className="tiny material-icons clickable-icon" onClick={this.handleClickUp}>keyboard_arrow_up</i>
              <i className="tiny material-icons clickable-icon " onClick={this.handleClickDown}>keyboard_arrow_down</i>
            </div>

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