import request from 'superagent'

export function getSelectedRecipe(recipeId) {
    return request.get(`/api/v1/recipes/${recipeId}`)
        .then(response => response.body)
}