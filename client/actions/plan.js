
export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = "SET_PLAN"
export const UPDATE_DAY_RECIPE = "UPDATE_DAY_RECIPE"
export const REMOVE_DAY_RECIPE = "REMOVE_DAY_RECIPE"

import { updatePlanApi } from '../apis/plans'

// Get plan for Global state
export const getPlan = (id, plan) => {
  return {
    type: GET_PLAN,
    id,
    plan,
  }
}

// Set the plan in Global state
export const setPlan = (plan) => {
  return {
    type: SET_PLAN,
    plan,
  }
}

// Adds to the plan day recipes
export const addDayRecipe = (recipeId, selectedDay) => {
  return {
    type: UPDATE_DAY_RECIPE,
    day: {
      selectedDay,
      recipeId
    }
  }
}

// Removes from the plan day recipes
export const removeDayReicpe = (recipeId, selectedDay) => {
  return {
    type: REMOVE_DAY_RECIPE,
    day: {
      selectedDay,
      recipeId
    }
  }
}

// Save the plan to the DB
export const savePlan = (plan) => {
  return (dispatch) => {
    updatePlanApi(plan)
    .then(()=>{
      dispatch(getPlan(plan))
    })
    .catch(err => {
      console.log("API has Broken")
    })
  }
}