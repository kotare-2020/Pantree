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
      console.log(state)
      console.log(action)
      if(action.id == state.id){
     
      return action.plan
    }


    case SET_PLAN:
      return action.plan

    case UPDATE_DAY_RECIPE:
      let daySelected = state.find(element => element.dayNumber == action.selectedDay)

      if (daySelected == undefined) {
        state.push({
          dayNumber: action.selectedDay,
          recipes: []
        })
      }

      return state.map(day => {
        if(day.dayNumber == action.selectedDay) {
          console.log('state day' , day.dayNumber)
          console.log('selected day' , action.selectedDay)
          day.recipes.push(action.recipeDetails)
          return day
        }
        else return day

      })
     

    case REMOVE_DAY_RECIPE:
 
        return state.map(days => {
          if(days.dayNumber == action.selectedDay) {
            days.recipes = days.recipes.filter(recipe => {
              console.log('recipeId', action.recipeId)
              console.log('recipe.recipeId', recipe.recipeId)
              return recipe.recipeId != action.recipeId
            })
            return days
          }
          else return days
        })
    default:
      return state
  }
}

export default reducer 
