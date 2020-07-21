import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp, moveRecipeCardLeft, moveRecipeCardRight, cloneDayRecipe } from '../actions/plan'
import { clearSelectedDay } from '../actions/selectedDay'
import { Link } from 'react-router-dom'
import RecipeModal from './RecipeModal'

class PlanRecipeCard extends React.Component {

  state = {
    showRecipeModal: false,
  }

  handleDelete = e => {
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

  openRecipeModal = () => {
    this.setState({ showRecipeModal: true })
  }

  closeRecipeModal = () => {
    this.setState({ showRecipeModal: false })
  }

  handleClickTitle = () => {
    this.props.dispatch(clearSelectedDay())
  }

  render() {

    return <>
      {this.state.showRecipeModal && <RecipeModal selectedRecipeId={this.props.recipe.recipeId} closeRecipeModal={this.closeRecipeModal} />}

      <div className="card hoverable">
        <div className="card-image">
          <Link to="#recipe-summary" onClick={this.openRecipeModal} className="modal-trigger">
            <img className="card-img" src={this.props.recipe.recipeImage}></img>
          </Link>

          <a className="btn-small btn-floating btn-clone halfway-fab waves-effect waves-light grey darken-2" onClick={this.handleClone}>
            <i className="material-icons">content_copy</i>
          </a>

          <a className="btn-small btn-floating btn-delete halfway-fab waves-effect waves-light grey darken-2" onClick={this.handleDelete}>
            <i className="material-icons" onClick={this.handleClick}>delete</i>
          </a>
        </div>

        <div className="card-content">
          <div className="card-title-and-up-down-arrows">
            <div className="card-title">
              <Link to={`/recipes/${this.props.recipe.recipeId}`} onClick={this.handleClickTitle}>
                <h6>{this.props.recipe.recipeName}</h6>
              </Link>
            </div>

            <div className="card-arrow-up-down">
              <div className="card-arrow-up">
                {this.props.cardIndex === 0
                  ?
                  <i className="tiny material-icons hide-on-med-and-down hidden-icon">keyboard_arrow_up</i>
                  :
                  <i className="tiny material-icons hide-on-med-and-down clickable-icon" onClick={this.handleClickUp}>keyboard_arrow_up</i>
                }
              </div>
              <div className="card-arrow-down">
                {this.props.cardIndex === this.props.lastCardIndex
                  ?
                  <i className="tiny material-icons hide-on-med-and-down hidden-icon">keyboard_arrow_down</i>
                  :
                  <i className="tiny material-icons hide-on-med-and-down clickable-icon" onClick={this.handleClickDown}>keyboard_arrow_down</i>
                }
              </div>
            </div>
          </div>
          <div className="card-arrow-left-right">
            {this.props.dayNumber != 1
              ?
              <i className="tiny material-icons hide-on-med-and-down clickable-icon" onClick={this.handleClickLeft} >keyboard_arrow_left</i>
              :
              <i className="tiny material-icons hide-on-med-and-down hidden-icon">keyboard_arrow_left</i>
            }
            {this.props.dayNumber != 7
              ?
              <i className="tiny material-icons hide-on-med-and-down clickable-icon" onClick={this.handleClickRight}>keyboard_arrow_right</i>
              :
              <i className="tiny material-icons hide-on-med-and-down hidden-icon">keyboard_arrow_left</i>
            }
          </div>
        </div>
      </div>
    </>
  }
}

function mapStateToProps(globalState) {
  return {
    plans: globalState.plans
  }
}

export default connect(mapStateToProps)(PlanRecipeCard)