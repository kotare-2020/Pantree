import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDayRecipe } from '../actions/plan'

class RecipeThumbnail extends React.Component {
  handleAdd = () => {
    const recipeDetails = {
      recipeId: this.props.id,
      recipeName: this.props.name,
      recipeImage: this.props.image
    }

    this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
  }

  render() {
    const recipe = this.props

    return (
      <div className='col s4 m4'>
        <div className='card medium hoverable'>

          <div className='card-image'>
            <img
              className='recipe-card-img'
              src={recipe.image}
              alt={`Photo of ${recipe.name}`} />
          </div>

          <div className='recipe-card-content'>
            <span className="card-title">{recipe.name}</span>
            <div className='card-action'>
              {this.props.selectedDay &&
                <Link to='/plan' onClick={this.handleAdd}>
                  Add to day {recipe.selectedDay}
                </Link>
              }
              <Link to={`/recipes/${recipe.id}`}>
                View recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(RecipeThumbnail)
