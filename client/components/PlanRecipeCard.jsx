import React from 'react'
import { connect } from 'react-redux'
import { removeDayRecipe } from '../actions/plan'

class PlanRecipeCard extends React.Component {
  componentDidMount() {
    console.log(this.props.uniqueRecipeId)
  }

  handleClick = e => {
    this.props.dispatch(
      removeDayRecipe(this.props.uniqueRecipeId, this.props.dayNumber)
    )
  }

  render() {
    return (
      <>
        <div className="recipe-card">
          <h3>{this.props.recipe.recipeName}</h3>
          <button onClick={this.handleClick}>Remove</button>
        </div>
      </>
    )
  }
}

export default connect()(PlanRecipeCard)
