import { getPlanIdByUserId, updatePlanApi } from '../apis/plans'
import { getShoppingList } from '../apis/shoppingList'

export const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST'

export function setShoppingList(list) {
    return {
        type: SET_SHOPPING_LIST,
        list: list
    }
}

export function fetchShoppingList(userId, plan) {

    return dispatch => {
        getPlanIdByUserId(userId)
        .then(planId => {
            const id = planId
            return updatePlanApi(planId, plan)
                .then(res => {
                    getShoppingList(id)
                    .then(list => {
                        dispatch(setShoppingList(list))
                    })
                })
        })
    }
}