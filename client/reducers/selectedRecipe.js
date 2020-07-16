import { SET_SELECTED_RECIPE } from '../actions/selectedRecipe'

const initialState = []

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case SET_SELECTED_RECIPE:
            return action.selectedRecipe
        default:
            return state
    }
}

export default reducer