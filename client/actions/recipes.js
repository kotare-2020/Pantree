import { getRecipes } from '../apis/recipes'

export const GET_RECIPES = 'GET_RECIPES'
export const SET_RECIPES = 'SET_RECIPES'
export const SAVE_RECIPES = 'SAVE_RECIPES'

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