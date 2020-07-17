import { getShoppingList } from '../apis/shoppingList'

export const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST'

export function setShoppingList(ingredients) {
    return {
        type: SET_SHOPPING_LIST,
        list: ingredients
    }
}

export function fetchShoppingList(planId) {
    return dispatch => {
        getShoppingList(planId)
        .then(ingredients => {
            dispatch(setShoppingList(ingredients))
        })
    }
}