export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = 'SET_PLAN'
export const UPDATE_DAY_RECIPE = 'UPDATE_DAY_RECIPE'
export const REMOVE_DAY_RECIPE = 'REMOVE_DAY_RECIPE'

import { updatePlanApi, getPlanApi } from '../apis/plans'

export const getPlan = (id, plan) => {
  return {
    type: GET_PLAN,
    id,
    plan,
  }
}

export const setPlan = plan => {
  return {
    type: SET_PLAN,
    plan,
  }
}

export const addDayRecipe = (recipeDetails, selectedDay) => {
  return {
    type: UPDATE_DAY_RECIPE,
    recipeDetails: recipeDetails,
    selectedDay: selectedDay,
  }
}

export const removeDayRecipe = (recipeId, selectedDay) => {
  return {
    type: REMOVE_DAY_RECIPE,
    selectedDay: selectedDay,
    recipeId: recipeId,
  }
}

<<<<<<< HEAD
// Save the plan to the DB
export const savePlan = (id,plan) => {
  return (dispatch) => {
    updatePlanApi(id, plan)
      .then(() => {      
       return dispatch(getPlan(id,plan))
      })
      .catch(err => {
        console.log('action',err);
        
        console.log("API has Broken")
=======
export const savePlan = plan => {
  return dispatch => {
    updatePlanApi(plan)
      .then(() => {
        dispatch(getPlan(plan))
      })
      .catch(err => {
        console.log('savePlan has Broken')
>>>>>>> 5b8f65612b5c718a36fcb876bdd1198127ac3652
      })
  }
}

export const fetchPlan = id => {
  return dispatch => {
    getPlanApi(id)
      .then(plan => {
        dispatch(getPlan(id, plan))
      })
      .catch(err => {
        console.log('fetchPlan has Broken')
      })
  }
}
