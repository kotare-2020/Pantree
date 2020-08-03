import { SET_PLAN_NEEDS_FETCHING } from '../actions/planNeedsFetching'

const initialState = true

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAN_NEEDS_FETCHING:
      return action.status
    
    default:
      return state
  }
}

export default reducer