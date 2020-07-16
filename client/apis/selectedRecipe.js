import request from 'superagent'

export function getRecipe(recipeId) {
    return request.get(`/api/v1/recipes/${recipeId}`)
        .then(response => response.body)
}