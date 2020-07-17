import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import { Link } from 'react-router-dom'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'
import { addDayRecipe } from '../actions/plan'
// import { removeDayRecipe } from '../actions/plan'

class Recipes extends React.Component {


    componentDidMount () {
        this.props.dispatch(fetchRecipes())
    }

    handleAdd = (recipeId, recipeName) => {
        console.log('clicked add')
        const recipeDetails = {
            recipeId: recipeId,
            recipeName: recipeName
        }
        this.props.dispatch(addDayRecipe(recipeDetails, 1))
        // this.props.dispatch(removeDayRecipe(recipeId, 1))
    }

    render() {
        return (
        <div>
            <h1>All the recipes</h1>
            
                {this.props.recipes.map(recipe => {
                    return (
                        <div >
                            {recipe.recipeName}
                            <img style={{width:'200px'}} src={recipe.image} alt= {`image of ${recipe.recipeName}`}/>
                            <Link to={'/plan'}><button>Back to Plan</button></Link>
                            <Link to={`/recipes/${recipe.recipeId}`}><button>View</button></Link>
                            <Link to={`/recipes`}><button onClick={() => this.handleAdd(recipe.recipeId, recipe.recipeName)}>Add to Plan</button></Link>
                        </div>
                    )
                })}
        </div>
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