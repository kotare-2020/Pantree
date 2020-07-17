import { SET_RECIPES } from '../actions/recipes'

const initialState = []

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case SET_RECIPES:
            return action.recipes
        default:
            return state
    }
}

export default reducer