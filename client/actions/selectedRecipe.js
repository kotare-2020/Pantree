import { getRecipe } from '../apis/selectedRecipe'

export const SET_RECIPE = 'SET_RECIPE'

export function setRecipe (recipe) {
    return {
        type: SET_RECIPE,
        recipe: recipe
    }
}

export function fetchRecipe (recipeId) {
    return dispatch => {
        getRecipe(recipeId)
        .then(recipe => {
            dispatch(setRecipe(recipe))
        })
    }
}