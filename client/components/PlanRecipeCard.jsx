import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, cloneDayRecipe} from '../actions/plan'
import {clearSelectedDay} from '../actions/selectedDay'
import {browserHistory} from 'react-router'




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

  handleClickTitle=()=>{
  this.props.dispatch(clearSelectedDay())
  .then(()=>{
    browserHistory.push('/')
  })

  }

  render() {
    return (
      <>
        <div className="card card-container">
 
          
          <div className="delete-container">
          <i onClick={this.handleClone} className="xs-icon material-icons clickable-icon">content_copy</i>
            <i className="xs-icon material-icons clickable-icon" onClick={this.handleClick}>delete</i>
            {/* <a class="btn-floating btn-small waves-effect waves-light teal-text"><i class="material-icons">delete</i></a> */}

          </div>
         
        <a onClick={this.handleClickTitle} ><span className="card-title">{this.props.recipe.recipeName}</span></a>

          <div className="arrow-container ">

            <div className="container-arrow-left-right">
              <i onClick={this.handleClickUp} className="tiny material-icons clickable-icon">keyboard_arrow_left</i>
              <i className="tiny material-icons clickable-icon" onClick={this.handleClickDown}>keyboard_arrow_right</i>
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

export default connect()(PlanRecipeCard)
