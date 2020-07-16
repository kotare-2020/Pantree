import { combineReducers } from "redux"

import auth from './auth'
import recipes from './recipes'
import selectedRecipe from './selectedRecipe'

export default combineReducers({
    auth,
    recipes,
    selectedRecipe,
})