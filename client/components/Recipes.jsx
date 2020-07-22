import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
// import { removeDayRecipe } from '../actions/plan'

import AddRecipe from './AddRecipe'

class Recipes extends React.Component {

  state = {
    formButton:false
  }


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

  handleFormButton = () => {
    if(this.state.formButton == false){
        this.setState({
            formButton:true
        })
    } else if (this.state.formButton == true){
        this.setState({
            formButton:false
        })
    }
}

  render() {
    return (
      <main className="container center-align">
        <h3>Recipes</h3>
        <div className="new-recipe">
          <button className='btn waves-effect waves-light btn-large lighten-2 new-recipe-button' onClick={this.handleFormButton}>{this.state.formButton ? "Cancel" : "Add Recipe"}</button>
          {this.state.formButton && <AddRecipe/>}
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
