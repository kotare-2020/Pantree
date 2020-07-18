import { getPlanIdByUserId } from '../apis/plans'
import { getShoppingList } from '../apis/shoppingList'

export const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST'

export function setShoppingList(list) {
    return {
        type: SET_SHOPPING_LIST,
        list: list
    }
}

export function fetchShoppingList(userId) {
    return dispatch => {
        getPlanIdByUserId(userId)
        .then(res => {
            getShoppingList(res.planId)
            .then(list => {
                dispatch(setShoppingList(list))
            })
        })
    }
}