import request from 'superagent'

export function getShoppingList(planId) {
    return request.get(`/api/v1/shopping-list/:${planId}`)
        .then(response => response.body)
}