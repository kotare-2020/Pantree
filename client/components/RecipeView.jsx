import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'


class RecipeView extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.dispatch(fetchSelectedRecipe(id))
    }

    render() {
        return (
            <div>
                <h1>{this.props.selectedRecipe.recipeName}</h1>
                <img src={this.props.selectedRecipe.image} alt={`image of ${this.props.selectedRecipe.recipeName}`} />
                <h3>Ingredients:</h3>
                <ul>
                    {this.props.selectedRecipe.ingredients && this.props.selectedRecipe.ingredients.map(ingredient => {
                        return (<li>{ingredient.ingredientName} {ingredient.quantity} {ingredient.unit}</li>)
                    })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        selectedRecipe: globalState.selectedRecipe
    }
}

export default connect(mapStateToProps)(RecipeView)