import { getRecipes, addRecipe, addRecipeIngredients } from '../apis/recipes'

export const SET_RECIPES = 'SET_RECIPES'

export function saveRecipe (recipe, ingredients) {
    return dispatch => {
        addRecipe(recipe)
        .then(data => {
            dispatch(setRecipes(data.allRecipes))
            return addRecipeIngredients(ingredients, data.id)
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