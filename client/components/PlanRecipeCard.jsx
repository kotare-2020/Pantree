import React from 'react'
import { connect } from 'react-redux'


class PlanRecipeCard extends React.Component {
  render(){
    return (
      <>
      <div className="recipe-card">
        <h3 >{this.props.recipe.recipeName}</h3>
        <button>Remove</button>
      </div>
      </>
    )
  }
}

export default connect()(PlanRecipeCard)