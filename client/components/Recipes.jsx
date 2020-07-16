import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'

class Recipes extends React.Component {

    componentDidMount () {
        this.props.dispatch(fetchRecipes())
    }

    render()   {
        return (
        <div>
            <h1>All the recipes</h1>
            
                {this.props.recipes.map(recipe => {
                    return (
                        <div >
                            {recipe.recipeName}
                            <img style={{width:'200px'}} src={recipe.image} alt= {`image of ${recipe.recipeName}`}/>
                            <button>Add</button>
                            <button>View</button>
                        </div>
                    )
                })}
        </div>
        )
    }
}

function mapStateToProps (globalState) {
    return {
        recipes: globalState.recipes
    }
}

export default connect(mapStateToProps)(Recipes)