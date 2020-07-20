import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
  MOVE_RECIPE_CARD_DOWN,
  MOVE_RECIPE_CARD_UP,

} from '../actions/plan'

import { v4 as uuidv4 } from 'uuid'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN:
      if (action.id == state.id) {
        return action.plan
      }

    case SET_PLAN:
      action.plan.forEach(day => {
        day.recipes.forEach(recipe => {
          recipe.recipeUuid = uuidv4()
        })
      })
      return action.plan

    case UPDATE_DAY_RECIPE:
      // Determine if the day already exists
      let daySelected = state.find(
        element => element.dayNumber == action.selectedDay
      )

      // If it doesnt, create an empty object for that day
      if (daySelected == undefined) {
        state.push({
          dayNumber: action.selectedDay,
          recipes: [],
        })
      }

      // Adding the recipe to the day
      return state.map(day => {
        if (day.dayNumber == action.selectedDay) {
          // Add a uuid to the recipeDetails
          action.recipeDetails.recipeUuid = uuidv4()

          // Add the full object, with the uuid, to the day
          day.recipes.push(action.recipeDetails)
          return day
        } else return day
      })

    case REMOVE_DAY_RECIPE:
      return state.map(days => {
        if (days.dayNumber == action.selectedDay) {
          days.recipes = days.recipes.filter(recipe => {
            return recipe.recipeUuid != action.recipeUuid
          })
          return days
        } else return days
      })

      case MOVE_RECIPE_CARD_DOWN:
        return state.map(day => {
          if (day.dayNumber == action.selectedDay) {
            let index = 0
            for(let i=0; i < day.recipes.length; i++) {
              if(day.recipes[i].recipeUuid == action.recipeUuid){
                index = i
              }
            }
            const newIndex = index + 1
            if (newIndex < 0 || newIndex == day.recipes.length) return day; //Already at the top or bottom.
            let indexes = [index, newIndex].sort((a, b) => a - b)
            day.recipes.splice(indexes[0], 2, day.recipes[indexes[1]], day.recipes[indexes[0]])
            return day
          } else return day
        })
       
        case MOVE_RECIPE_CARD_UP:
          return state.map(day => {
            if (day.dayNumber == action.selectedDay) {  
              let index = 0
              for(let i=0; i < day.recipes.length; i++) {
                
                if(day.recipes[i].recipeUuid == action.recipeUuid){
                  index = i
                }
              }
              const newIndex = index -1
              if (newIndex < 0 || newIndex == day.recipes.length) return day; //Already at the top or bottom.
              let indexes = [index, newIndex].sort((a, b) => a - b)
              day.recipes.splice(indexes[0], 2, day.recipes[indexes[1]], day.recipes[indexes[0]])
              return day
            } else return day
          })

    default:
      return state
  }
}

export default reducer


// {
//   type: 'MOVE_RECIPE_CARD_DOWN',
//   selectedDay: 4,
//   recipeUuid: 'd7ef8aad-54e5-47a6-9044-9af38e65ac76'
//   }