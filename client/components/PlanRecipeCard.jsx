import React from 'react'
import { connect } from 'react-redux'

import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, moveRecipeCardLeft, moveRecipeCardRight, cloneDayRecipe } from '../actions/plan'

class PlanRecipeCard extends React.Component {
  state = {
    isLastColumnRecipe: false
  }

  componentDidMount() {
    this.determineIfLastColumnRecipe()
  }

  determineIfLastColumnRecipe = () => {
    const dayNumber = this.props.dayNumber
    const recipeUuid = this.props.recipe.recipeUuid

    const dayColumn = this.props.days.find(day => day.dayNumber === dayNumber)
    const dayColumnLastIndex = dayColumn.recipes.length - 1
    const recipeIndex = dayColumn.recipes.findIndex(recipe => recipe.recipeUuid === recipeUuid)

    if (dayColumnLastIndex === recipeIndex) {
      this.setState({
        isLastColumnRecipe: true
      })
    }
  }

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

  render() {
    return (
      <>
        <div className="card hoverable">
          
          <div className="card-image">
            <img className="responsive-img" src={this.props.recipe.recipeImage} />
          </div>

          <div className="card-content">
            <div className="card-header-container">
              <span className="card-recipe-name">{this.props.recipe.recipeName}</span>
              <div>
                <i className="xs-icon material-icons clickable-icon" onClick={this.handleClone}>content_copy</i>
                <i className="xs-icon material-icons clickable-icon delete" onClick={this.handleClick}>delete</i>
              </div>
            </div>
          </div>

          <div className="arrow-container">
            <div className="container-arrow-left-right">
              {this.props.dayNumber != 1
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickLeft} >keyboard_arrow_left</i>
                :
                <i className="tiny material-icons hidden-icon">keyboard_arrow_left</i>
              }
              {this.props.dayNumber != 7
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickRight}>keyboard_arrow_right</i>
                :
                <i className="tiny material-icons hidden-icon">keyboard_arrow_left</i>
              }
            </div>

            <div className="container-arrow-up-down">
              {this.props.itemIndex != 0
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickUp}>keyboard_arrow_up</i>
                :
                <i className="tiny material-icons hidden-icon">keyboard_arrow_up</i>
              }
              {!this.state.isLastColumnRecipe
                ?
                <i className="tiny material-icons clickable-icon" onClick={this.handleClickDown}>keyboard_arrow_down</i>
                :
                <i className="tiny material-icons hidden-icon">keyboard_arrow_down</i>}
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