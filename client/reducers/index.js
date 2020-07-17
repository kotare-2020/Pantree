import { combineReducers } from "redux"

import auth from './auth'
import selectedDay from './selectedDay'
import plans from './plans'

export default combineReducers({
    auth,
    selectedDay,
    plans,
})