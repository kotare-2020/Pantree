import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
// import { removeDayRecipe } from '../actions/plan'

class Recipes extends React.Component {

    componentDidMount () {
        this.props.dispatch(fetchRecipes())
    }

    render() {
        return (
        <main className="container">           
                {this.props.recipes.map(recipe => {
                    return (
                        <RecipeThumbnail key={recipe.recipeId} name={recipe.recipeName} image={recipe.image} id={recipe.recipeId} />
                    )
                })}
        </main>
        )
    }
}

function mapStateToProps (globalState) {
    return {
        recipes: globalState.recipes,
        selectedDay: globalState.selectedDay
    }
}

export default connect(mapStateToProps)(Recipes)