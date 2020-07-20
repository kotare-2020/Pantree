import { SET_RECIPES, ADD_RECIPE } from '../actions/recipes'

const initialState = []

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case SET_RECIPES:
            return action.recipes
        // case ADD_RECIPE:
        //     return [...state, action.recipe]
        default:
            return state
    }
}

export default reducer