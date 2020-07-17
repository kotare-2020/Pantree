import { SET_SHOPPING_LIST } from '../actions/shoppingList'

const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SHOPPING_LIST:
            return action.list
    }
}

export default reducer