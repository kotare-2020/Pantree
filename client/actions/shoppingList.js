import { getShoppingList } from '../apis/shoppingList'
import { getPlanId } from '../apis/plans'

export const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST'

export function setShoppingList(ingredients) {
    return {
        type: SET_SHOPPING_LIST,
        list: ingredients
    }
}

export function fetchShoppingList(userId) {
    return dispatch => {
        getPlanIdByUserId(userId)
        .then(planId => {
            getShoppingList(planId)
            .then(ingredients => {
                dispatch(setShoppingList(ingredients))
            })
        })
    }
}