import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
} from "../actions/plan"

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PLAN:
       if(action.id == state.id)
       return action.plan

    case SET_PLAN:
      return action.plan

    case UPDATE_DAY_RECIPE:
      if(action.day.selectedDay == selectedDay){
        return action.day
      }

    case REMOVE_DAY_RECIPE:
        return state.filter(day => day.recipeId !== action.day.recipeId)

    default:
      return state
  }
}

export default reducer 
