import { SET_DAY } from '../actions/selectedDay'

const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_DAY:
      return action.selectedDay

    default:
      return state
  }
}

export default reducer 