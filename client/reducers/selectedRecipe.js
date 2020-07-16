import { SET_RECIPE } from '../actions/selectedRecipe'

const initialState = []

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case SET_RECIPE:
            return action.recipe
        default:
            return state
    }
}

export default reducer