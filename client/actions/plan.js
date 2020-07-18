export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = 'SET_PLAN'
export const UPDATE_DAY_RECIPE = 'UPDATE_DAY_RECIPE'
export const REMOVE_DAY_RECIPE = 'REMOVE_DAY_RECIPE'

import { updatePlanApi, getPlanApi, getPlanIdByUserId } from '../apis/plans'

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

// Save the plan to the DB
export const savePlan = (userId, plan) => {
  return (dispatch) => {
    getPlanIdByUserId(userId)
      .then(planId => {
        return dispatch(updatePlanApi(planId, plan))
      })
      .catch(err => {
        console.log('action',err);
        
        console.log('savePlan has Broken')
      })
  }
}


// export const savePlan = (id,plan) => {
//   return (dispatch) => {
//     updatePlanApi(id, plan)
//       .then(() => {      
//        return dispatch(getPlan(id,plan))
//       })
//       .catch(err => {
//         console.log('action',err);
        
//         console.log('savePlan has Broken')
//       })
//   }
// }



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
