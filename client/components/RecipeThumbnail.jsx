import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDayRecipe } from '../actions/plan'


class RecipeThumbnail extends React.Component {

    handleAdd = () => {

        const recipeDetails = {
            recipeId: this.props.id,
            recipeName: this.props.name
        }

        this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
    }

    render() {

        const recipe = this.props

        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card large hoverable">
                        <div className="card-image">
                            <img src={recipe.image} alt={`Photo of ${recipe.name}`} width="150px" height="600px" />
                        </div>
                        <div className="card-content center-align">
                            <h3>{recipe.name}</h3>
                        </div>
                        <div className="card-action center-align">
                            <Link to="/plan">
                                <button className="waves-effect waves-light btn" onClick={this.handleAdd}>Add to Day {recipe.selectedDay}</button>
                            </Link>
                            <Link to={`/recipes/${recipe.id}`}>
                                <button className="waves-effect waves-light btn">View Recipe</button>
                            </Link>
                            <Link to="/plan">
                                <button className="waves-effect waves-light btn">Back to Plan</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(RecipeThumbnail)
