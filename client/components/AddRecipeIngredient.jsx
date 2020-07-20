import React from 'react'
import { connect } from 'react-redux'

class AddRecipeIngredients extends React.Component {
    state = {
        quantity: null,
        recipeId: null,
        ingredientId: null
    }

    render() {
        return (
            <>
            </>
        )
    }
}

export default connect()(AddRecipeIngredients)