export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = 'SET_PLAN'
export const UPDATE_DAY_RECIPE = 'UPDATE_DAY_RECIPE'
export const REMOVE_DAY_RECIPE = 'REMOVE_DAY_RECIPE'
export const MOVE_RECIPE_CARD_DOWN = 'MOVE_RECIPE_CARD_DOWN'
export const MOVE_RECIPE_CARD_UP = 'MOVE_RECIPE_CARD_UP'
export const CLONE_DAY_RECIPE = 'CLONE_DAY_RECIPE'
export const MOVE_DAY_RECIPE_LEFT = 'MOVE_DAY_RECIPE_LEFT'
export const MOVE_DAY_RECIPE_RIGHT = 'MOVE_DAY_RECIPE_RIGHT'

import {
  updatePlanApi,
  getPlanApi,
  getPlanIdByUserId,
  createPlanApi,
} from '../apis/plans'

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
    recipeBeingClonedUuid: recipeBeingClonedUuid,
  }
}

export const moveRecipeCardLeft = (currentDayNumber, recipeBeingMoved) => {
  return {
    type: MOVE_DAY_RECIPE_LEFT,
    currentDayNumber: currentDayNumber,
    recipeBeingMoved: recipeBeingMoved,
  }
}

export const moveRecipeCardRight = (currentDayNumber, recipeBeingMoved) => {
  return {
    type: MOVE_DAY_RECIPE_RIGHT,
    currentDayNumber: currentDayNumber,
    recipeBeingMoved: recipeBeingMoved,
  }
}

export const removeDayRecipe = (recipeUuid, selectedDay) => {
  return {
    type: REMOVE_DAY_RECIPE,
    selectedDay: selectedDay,
    recipeUuid: recipeUuid,
  }
}

export const moveRecipeCardDown = (recipeUuid, selectedDay) => {
  return {
    type: MOVE_RECIPE_CARD_DOWN,
    selectedDay: selectedDay,
    recipeUuid: recipeUuid,
  }
}

export const moveRecipeCardUp = (recipeUuid, selectedDay) => {
  return {
    type: MOVE_RECIPE_CARD_UP,
    selectedDay: selectedDay,
    recipeUuid: recipeUuid,
  }
}

export const savePlan = (userId, plan) => {
  return dispatch => {
    getPlanIdByUserId(userId)
      .then(result => {
        console.log('action', result)

        return updatePlanApi(result.planId, plan).then(result => {
          console.log(result)
        })
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
