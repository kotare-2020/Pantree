import request from 'superagent'

const ingredientUrl = "/api/v1/ingredients"

export function addIngredients(ingredients) {
    return request.post(ingredientUrl)
        .send(ingredients)
        .then(response => response.body)
}