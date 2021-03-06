import React from 'react'
import { matchPath } from 'react-router'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'
import { addDayRecipe } from '../actions/plan'
import { Link, withRouter } from 'react-router-dom'
import pluralize from 'pluralize'

export class RecipeView extends React.Component {
  componentDidMount() {
    const match = this.setMatch()
    const id = match.params.id
    this.props.dispatch(fetchSelectedRecipe(id))
  }

  componentDidUpdate(prevProps) {
    const match = this.setMatch()
    const id = match.params.id
    if (prevProps.match.params.id != id) {
      this.props.dispatch(fetchSelectedRecipe(id))
    }
  }

  setMatch = () => {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/recipes/:id',
      exact: true,
      strict: false
    })
    return match
  }

  handleAdd = () => {
    const recipeDetails = {
      recipeId: this.props.selectedRecipe.recipeId,
      recipeName: this.props.selectedRecipe.recipeName,
      recipeImage: this.props.selectedRecipe.image
    }
    this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
  }

  render() {
    const selectedRecipe = this.props.selectedRecipe
    return (
      <>
        {selectedRecipe &&
          <div className="container container-recipe-view">
            <div>
              <h3>{selectedRecipe.recipeName}</h3>
              <img className="recipe-view-img" src={selectedRecipe.image} alt={`image of ${selectedRecipe.recipeName}`} />
            </div>
            <h5>Ingredients</h5>

            <ul className="browser-default">
              {selectedRecipe.ingredients.map((ingredient, i) => {
                return (
                  <li key={i}> 
                    {ingredient.quantity} {ingredient.unit != 'each' && `${ingredient.unit} `}
                    {ingredient.quantity > 1
                      ? pluralize(ingredient.ingredientName, ingredient.quantity)
                      : ingredient.ingredientName}
                  </li>
                )
              })
              }
            </ul>

            <h5>Method</h5>
            <ol>
              {selectedRecipe.method.map((step, i) => {
                return <li key={i}>{step}</li>
              })}
            </ol>

            <div className="card-action">

              {this.props.selectedDay ?
                <>
                  <Link to="/plan">
                    <button className="waves-effect waves-light btn space-around" onClick={this.handleAdd}>Add to day {this.props.selectedDay}</button>
                  </Link>
                  <Link to="/recipes">
                    <button className="waves-effect waves-light btn space-around">Back to recipes</button>
                  </Link>
                </>
                :
                <>
                  <Link to="/plan">
                    <button className="waves-effect waves-light btn space-around">Back to plan</button>
                  </Link>
                </>
              }

            </div>
          </div>
        }
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    selectedRecipe: globalState.selectedRecipe,
    selectedDay: globalState.selectedDay
  }
}

export default withRouter(connect(mapStateToProps)(RecipeView))