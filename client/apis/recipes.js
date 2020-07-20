import request from 'superagent'

const recipeURL = '/api/v1/recipes/'

export function getRecipes() {
    return request.get(recipeURL)
        .then(response => response.body)
}

export function addRecipe(recipe) {
    return request.post(recipeURL)
        .send(recipe)
        .then(response => response.body)
}

export function addRecipeIngredients(recipeIngredients, recipeId) {
    return request.post(recipeURL + ':recipeId/ingredients')
        .send(recipeIngredients, recipeId)
        .then(response => response.body)
}
