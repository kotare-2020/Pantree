import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
} from "../actions/plan"

const initialState = []
  // { 
  //   "dayNumber": 2,
  //   "recipes": [
  //     { 
  //       "recipeId": 1,
  //       "recipeName": "pancake"
  //     },
  //     {
  //       "recipeId": 2,
  //       "recipeName": "stew",
  //     }
  //   ]

  // }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PLAN:
      return action.plan

    case SET_PLAN:
      return action.plan

    case UPDATE_DAY_RECIPE:
      if(action.selectedDay == state.dayNumber){
        state.recipes = state.recipes.push(action.recipeId)
        return state
      }

    case REMOVE_DAY_RECIPE:
        return state.filter(day => day.recipeId !== action.day.recipeId)

    default:
      return state
  }
}

export default reducer 
