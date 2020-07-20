export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = 'SET_PLAN'
export const UPDATE_DAY_RECIPE = 'UPDATE_DAY_RECIPE'
export const REMOVE_DAY_RECIPE = 'REMOVE_DAY_RECIPE'
export const CLONE_DAY_RECIPE = 'CLONE_DAY_RECIPE'

import { updatePlanApi, getPlanApi, getPlanIdByUserId, createPlanApi } from '../apis/plans'

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

export const cloneDayRecipe = (currentDayColumn, recipeBeingClonedUuid) => {
  return {
    type: CLONE_DAY_RECIPE,
    currentDayColumn: currentDayColumn,
    recipeBeingClonedUuid: recipeBeingClonedUuid
  }
}

export const removeDayRecipe = (recipeUuid, selectedDay) => {
  return {
    type: REMOVE_DAY_RECIPE,
    selectedDay: selectedDay,
    recipeUuid: recipeUuid,
  }
}

export const savePlan = (userId, plan) => {
  return dispatch => {
    getPlanIdByUserId(userId)
    .then(result => {
        updatePlanApi(result.planId, plan)
      })
      .catch(err => {
        console.log('savePlan has Broken')
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

export const createPlan = userId => {
  return dispatch => {
    createPlanApi(userId)
      .then(() => {
        return dispatch(fetchPlan(userId))
      })
      .catch(err => {
        console.log('createPlan has Broken')
      })
  }
} 