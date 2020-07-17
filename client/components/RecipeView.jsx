import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'


class RecipeView extends React.Component {

    render() {
        return (
        <div>
            <h1></h1>
        </div>
        )
    }
}

// function mapStateToProps (globalState) {
//     console.log(globalState)
//     return {
//         selectedRecipe: globalState.recipe
//     }
// }

export default connect()(RecipeView)