import {
  GET_PLAN,
  SET_PLAN,
  UPDATE_DAY_RECIPE,
  REMOVE_DAY_RECIPE,
  CLONE_DAY_RECIPE,
  MOVE_DAY_RECIPE_LEFT,
  MOVE_DAY_RECIPE_RIGHT
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

    case CLONE_DAY_RECIPE:
      return state.map(day => {
        // Select the right day
        if (day.dayNumber === action.currentDayColumn.dayNumber) {
          // Find the index and details of the recipe being cloned
          const clonedRecipeIndex = day.recipes.findIndex(element => element.recipeUuid === action.recipeBeingClonedUuid)
          const clonedRecipeDetails = day.recipes[clonedRecipeIndex]

          // Create a new object representing the recipe now being added, and give it a unique id
          let recipeBeingAdded = {
            recipeId: clonedRecipeDetails.recipeId,
            recipeName: clonedRecipeDetails.recipeName,
            recipeUuid: uuidv4()
          }

          // Insert the new recipe just after the original recipe
          day.recipes.splice(clonedRecipeIndex, 0, recipeBeingAdded)
          return day
        } else {
          return day
        }
      })

    case MOVE_DAY_RECIPE_LEFT: { 
      const newState = state.map(day => {
        return {
          dayNumber: day.dayNumber,
          recipes: [...day.recipes]
        }
      })

      const originalDayIndex = newState.findIndex(day => day.dayNumber == action.currentDayNumber)
      const originalRecipeIndex = newState[originalDayIndex].recipes.findIndex(recipe => recipe.recipeUuid === action.recipeBeingMoved.recipeUuid)
     
      const copiedRecipe = {
        recipeId: action.recipeBeingMoved.recipeId,
        recipeName: action.recipeBeingMoved.recipeName,
        recipeUuid: uuidv4()
      }
      
      const leftDayNumber = action.currentDayNumber - 1
      let leftDayIndex = newState.findIndex(day => day.dayNumber === leftDayNumber)

      if (leftDayIndex === -1) {
        newState.push({
          dayNumber: action.currentDayNumber -1,
          recipes: []
        })
        leftDayIndex = newState.length - 1
      }

      newState[leftDayIndex].recipes.push(copiedRecipe)
      newState[originalDayIndex].recipes.splice(originalRecipeIndex, 1)
      return newState
    }

    // case MOVE_DAY_RECIPE_RIGHT: {

    // }

    case REMOVE_DAY_RECIPE:
      return state.map(days => {
        if (days.dayNumber == action.selectedDay) {
          days.recipes = days.recipes.filter(recipe => {
            return recipe.recipeUuid != action.recipeUuid
          })
          return days
        } else return days
      })
    default:
      return state
  }
}

export default reducer
