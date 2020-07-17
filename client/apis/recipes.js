import request from 'superagent'

export function getRecipes() {
    return request.get('/api/v1/recipes/')
        .then(response => response.body)
}