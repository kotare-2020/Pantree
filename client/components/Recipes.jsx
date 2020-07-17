import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import { Link } from 'react-router-dom'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'
import { addDayRecipe } from '../actions/plan'

class Recipes extends React.Component {


    componentDidMount () {
        this.props.dispatch(fetchRecipes())
    }

    handleAdd = (recipeId) => {
        this.props.dispatch(addDayRecipe(recipeId, this.props.selectedDay))
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
                            <button onClick={() => this.handleAdd(recipe.recipeId)}>Add to Plan</button>
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