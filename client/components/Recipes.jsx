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
            <ul>
                {this.props.recipes.map(recipeName => {
                    return (
                        <li>{recipeName.recipeName}</li>
                    )
                })}
            </ul>
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