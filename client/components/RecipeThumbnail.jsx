import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { addDayRecipe } from '../actions/plan'


class RecipeThumbnail extends React.Component {

    handleAdd = (recipeId, recipeName) => {
        const recipeDetails = {
            recipeId: recipeId,
            recipeName: recipeName
        }
        this.props.dispatch(addDayRecipe(recipeDetails, 1))
        // this.props.dispatch(removeDayRecipe(recipeId, 1))
    }
    render() {

        const recipe = this.props

        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={recipe.image} alt={`Photo of ${recipe.name}`} width="100px" height="600px"/>
                        </div>
                        <div className="card-content">
                            <h4>{recipe.name}</h4>
                        </div>
                        <div className="card-action">
                            <Link to={"/plan"}><button>Back to Plan</button></Link>
                            <Link to={`/recipes/${recipe.id}`}><button>View</button></Link>
                            <Link to={"/recipes"}><button onClick={() => this.handleAdd(recipe.id, recipe.name)}>Add to Plan</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(RecipeThumbnail)
