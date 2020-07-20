import { getRecipes, addRecipe } from '../apis/recipes'

export const SET_RECIPES = 'SET_RECIPES'
// export const ADD_RECIPE = 'ADD_RECIPE'

// export function addRecipe (recipe) {
//     return {
//         type: ADD_RECIPE,
//         recipe: recipe
//     }
// }

export function saveRecipe (recipe) {
    return dispatch => {
        addRecipe(recipe)
        .then(() => {
            return getRecipes()
        })
        .then(recipes => {
            dispatch(setRecipes(recipes))
        })
    }
}

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