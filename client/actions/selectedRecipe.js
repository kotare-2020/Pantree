import { getSelectedRecipe } from '../apis/selectedRecipe'

export const SET_SELECTED_RECIPE = 'SET_SELECTED_RECIPE'

export function setSelectedRecipe (selectedRecipe) {
    return {
        type: SET_SELECTED_RECIPE,
        selectedRecipe: selectedRecipe
    }
}

export function fetchSelectedRecipe (recipeId) {
    return dispatch => {
        getSelectedRecipe(recipeId)
        .then(recipe => {
            dispatch(setSelectedRecipe(recipe))
        })
    }
}