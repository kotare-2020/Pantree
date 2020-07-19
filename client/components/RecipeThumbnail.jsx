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
                <div className="col s8 m8">
                    <div className="card medium hoverable">
                        <div className="card-image">
                            <img src={recipe.image} alt={`Photo of ${recipe.name}`} width="120px" height="300px" />
                        </div>
                        <div className="card-content">
                            <h5>{recipe.name}</h5>
                        </div>
                        <div className="card-action">
                            <Link to="/plan">
                                <button className="waves-effect waves-light btn">Back to Plan</button>
                            </Link>
                            <Link to={`/recipes/${recipe.id}`}>
                                <button className="waves-effect waves-light btn">View Recipe</button>
                            </Link>
                            <Link to="/plan">
                                <button className="waves-effect waves-light btn" onClick={this.handleAdd}>Add to Plan</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(RecipeThumbnail)
