import { getShoppingList } from '../apis/shoppingList'

export const SET_SHOPPINGLIST = 'SET_SHOPPINGLIST'

export function setShoppingList(ingredients) {
    return {
        type: SET_SHOPPINGLIST,
        list: ingredients
    }
}

export function fetchShoppingList () {
    return dispatch => {
        getShoppingList()
        .then(ingredients => {
            dispatch(setShoppingList(ingredients))
        })
    }
}