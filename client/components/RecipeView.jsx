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
        console.log('clicked add')
        const recipeDetails = {
            recipeId: this.props.selectedRecipe.recipeId,
            recipeName: this.props.selectedRecipe.recipeName
        }
        this.props.dispatch(addDayRecipe(recipeDetails, this.props.selectedDay))
    }

    render() {
        return (
            <>
            {this.props.selectedRecipe &&
            <div>
                <h1>{this.props.selectedRecipe.recipeName}</h1>
                <img src={this.props.selectedRecipe.image} alt={`image of ${this.props.selectedRecipe.recipeName}`} />
                <h3>Ingredients:</h3>
                <ul>
                    {this.props.selectedRecipe.ingredients.map(ingredient => {
                        return (<li>{ingredient.ingredientName} {ingredient.quantity} {ingredient.unit}</li>)
                    })
                    }
                </ul>
                <h5>Method:</h5>
                <ol>
                {this.props.selectedRecipe.method.map(step => {
                    return <li>{step}</li>
                })}
                </ol>
                <Link to={`/recipes`}><button>Back</button></Link>
                <Link to={`/plan`}><button onClick={this.handleAdd}>Add</button></Link>

       
            </div>}
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