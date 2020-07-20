import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe, moveRecipeCardDown, moveRecipeCardUp } from '../actions/plan'



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

  render() {
    return (
      <>
        <div className="card">
          <div className="delete-container">
            <i className=" delete material-icons clickable-icon" onClick={this.handleClick}>delete</i>
          </div>
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
  


        {/* <div className="card">
          <div className="delete-container">
            <i className=" delete material-icons clickable-icon" onClick={this.handleClick}>delete</i>
          </div>
          <span className="card-title">{this.props.recipe.recipeName}</span>

          <div className="container">

            <div className="row">

              <div className="col s4 offset-s4"><i className="tiny material-icons clickable-icon" onClick={this.handleClickUp}>arrow_upward</i>
              </div>

            </div>
            <div className="row">
              <div className="col s4"><i onClick={this.handleClickUp} className="tiny material-icons clickable-icon">arrow_back</i></div>

              <div className="col s4 offset-s4"><i className="tiny material-icons clickable-icon" onClick={this.handleClickDown} >arrow_forward</i>
              </div>
            </div>


            <div className="row">
              <div className="col s4 offset-s4"><i className="tiny material-icons clickable-icon " onClick={this.handleClickDown}>arrow_downward</i></div>
            </div>
          </div>

        </div> */}

      </>
    )
  }
}

export default connect()(PlanRecipeCard)
