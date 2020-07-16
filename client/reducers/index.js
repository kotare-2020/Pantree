import { combineReducers } from "redux"

import auth from './auth'
import recipes from './recipes'
import recipe from './recipe'

export default combineReducers({
    auth,
    recipes,
    recipe
})