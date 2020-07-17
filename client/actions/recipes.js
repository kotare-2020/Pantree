import { getRecipes } from '../apis/recipes'

export const SET_RECIPES = 'SET_RECIPES'

export function setRecipes (recipes) {
    return {
        type: SET_RECIPES,
        recipes: recipes
    }
}

export function fetchRecipes () {
    return dispatch => {
        getRecipes()
        .then(recipes => {
            dispatch(setRecipes(recipes))
        })
    }
}