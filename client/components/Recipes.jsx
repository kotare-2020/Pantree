import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
// import { removeDayRecipe } from '../actions/plan'

import AddRecipe from './AddRecipe'
import AddIngredients from './AddIngredients'

class Recipes extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes())
  }

  handleAdd = (recipeId, recipeName, recipeImage) => {
    const recipeDetails = {
      recipeId: recipeId,
      recipeName: recipeName,
      recipeImage: recipeImage
    }
    this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
  }

  render() {
    return (
      <main className="container center-align">
        <h3>Recipes</h3>
        <div className="new-recipe">
          <AddRecipe/>
          <AddIngredients/>
        </div>
        <div className="row">
          {this.props.recipes.map(recipe => {
            return (
              <RecipeThumbnail key={recipe.recipeId} name={recipe.recipeName} image={recipe.image} id={recipe.recipeId} selectedDay={this.props.selectedDay} />
            )
          })}
        </div>
      </main>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    recipes: globalState.recipes,
    selectedDay: globalState.selectedDay,
  }
}

export default connect(mapStateToProps)(Recipes)
