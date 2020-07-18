import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
} from '../actions/plan'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN:
<<<<<<< HEAD
   
      if(action.id == state.id){
     
      return action.plan
    }

=======
      if (action.id == state.id) {
        return action.plan
      }
>>>>>>> 5b8f65612b5c718a36fcb876bdd1198127ac3652

    case SET_PLAN:
      return action.plan

    case UPDATE_DAY_RECIPE:
      let daySelected = state.find(
        element => element.dayNumber == action.selectedDay
      )

      if (daySelected == undefined) {
        state.push({
          dayNumber: action.selectedDay,
          recipes: [],
        })
      }

      return state.map(day => {
        if (day.dayNumber == action.selectedDay) {
          day.recipes.push(action.recipeDetails)
          return day
        } else return day
      })

    case REMOVE_DAY_RECIPE:
<<<<<<< HEAD
 
        return state.map(days => {
          if(days.dayNumber == action.selectedDay) {
            days.recipes = days.recipes.filter(recipe => {

              return recipe.recipeId != action.recipeId
            })
            return days
          }
          else return days
        })
=======
      return state.map(days => {
        if (days.dayNumber == action.selectedDay) {
          days.recipes = days.recipes.filter(recipe => {
            return recipe.recipeId != action.recipeId
          })
          return days
        } else return days
      })
>>>>>>> 5b8f65612b5c718a36fcb876bdd1198127ac3652
    default:
      return state
  }
}

export default reducer
