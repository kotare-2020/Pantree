import { combineReducers } from "redux"

import auth from './auth'
import recipes from './recipes'
import selectedRecipe from './selectedRecipe'
import plans from './plans'
import selectedDay from './selectedDay'


export default combineReducers({
    auth,
    recipes,
    selectedRecipe,
    plans,
    selectedDay,
})