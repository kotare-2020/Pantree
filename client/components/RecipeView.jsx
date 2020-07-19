import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'
import { addDayRecipe } from '../actions/plan'
import { Link } from 'react-router-dom'


class RecipeView extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.dispatch(fetchSelectedRecipe(id))
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id
        if (prevProps.match.params.id != id) {
            this.props.dispatch(fetchSelectedRecipe(id))
        }
    }

    handleAdd = () => {
        const recipeDetails = {
            recipeId: this.props.selectedRecipe.recipeId,
            recipeName: this.props.selectedRecipe.recipeName
        }
        this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
    }

    render() {

        const selectedRecipe = this.props.selectedRecipe

        return (
            <>
                {selectedRecipe &&

                    <main className="container">
                        <div className="row">
                            <div className="col s8 push-s2">
                                <div className="center-align">
                                    <h1>{selectedRecipe.recipeName}</h1>
                                    <img src={selectedRecipe.image} alt={`image of ${selectedRecipe.recipeName}`} width="600px" height="450px" />
                                </div>
                                <h5>Ingredients:</h5>
                                <ul>
                                    {selectedRecipe.ingredients.map((ingredient, i) => {
                                        return (
                                            <li key={i}>{ingredient.ingredientName}  <em>{ingredient.quantity} {ingredient.unit}</em></li>
                                        )
                                    })
                                    }
                                </ul>

                                <h5>Method:</h5>
                                <ol>
                                    {selectedRecipe.method.map((step, i) => {
                                        return <li key={i}>{step}</li>
                                    })}
                                </ol>

                                <div className="card-action center-align">
                                    <Link to="/plan">
                                        <button className="waves-effect waves-light btn space-around" onClick={this.handleAdd}>Add to Day {this.props.selectedDay}</button>
                                    </Link>
                                    <Link to="/recipes">
                                        <button className="waves-effect waves-light btn space-around">Back to Recipes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>

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

export default connect(mapStateToProps)(RecipeView)