import { SET_DAY, CLEAR_DAY } from '../actions/selectedDay'

const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_DAY:
      return action.selectedDay

     case CLEAR_DAY:
     return initialState

    default:
      return state
  }
}

export default reducer 