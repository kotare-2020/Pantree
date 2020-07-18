import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
} from "../actions/plan"

const initialState = [
  { dayNumber: 1, recipes: []},
  { dayNumber: 2, recipes: []},
  { dayNumber: 3, recipes: []},
  { dayNumber: 4, recipes: []},
  { dayNumber: 5, recipes: []},
  { dayNumber: 6, recipes: []},
  { dayNumber: 7, recipes: []},
]

// action.plan
// [
//   { dayNumber: 1, recipes:[recipeId:2, recipes: []]},
//   { dayNumber: 7, recipes:[recipeId:4, recipes: []]},
// ]

// New state should be:
// [
//   { dayNumber: 1, recipes:[recipeId:2, recipes: []]},
//   { dayNumber: 2, recipes:[]},
//   { dayNumber: 3, recipes:[]},
//   { dayNumber: 4, recipes:[]},
//   { dayNumber: 5, recipes:[]},
//   { dayNumber: 6, recipes:[]},
//   { dayNumber: 7, recipes:[recipeId:4, recipes: []]},
// ]

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PLAN:

      //   { dayNumber: 4, recipes:[]},
      // action.plan.map(day => {

      // })
      return action.plan


      // return state.map((day,i) => {
      //   let exists = Object.values(action.plan[i]).includes(day.dayNumber)
      //   if (exists){
      //     return day.recipes = action.plan.recipes
      //   } return day
      // })
      // return state.map(day => {
      //   if(day.dayNumber == action.plan.dayNumber) {
      //     day.recipes = action.plan.recipes
      //     return day
      //   }
      // })

    case SET_PLAN:
      return action.plan

    case UPDATE_DAY_RECIPE:
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
