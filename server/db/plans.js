const connection = require("./connection")

function createPlan(newPlan, db = connection) {
  return db("plans")
  .insert(newPlan)
}

function editPlan(id, plan, db = connection) {
  return db("plans_recipes")
  .where("plan_id", id).delete()
  .then(() => {
    return Promise.all(plan.map(day => {
      return Promise.all(day.recipes.map(recipe => {
        const updatedPlansRecipe = {
          plan_id: id,
          day_number: day.dayNumber,
          recipe_id: recipe.recipeId
        }
        return db("plans_recipes").insert(updatedPlansRecipe)
      }))
    }))
  })
}

function getPlanByPlanId(planId, db = connection) {
  return db("plans")
    .join("plans_recipes", "plans.id", "plans_recipes.plan_id")
    .join("recipes", "plans_recipes.recipe_id", "recipes.id")
    .where("plans.id", planId)
    .select(
      "recipes.id as recipeId",
      "recipes.image as recipeImage",
      "plans.id as planId",
      "plans_recipes.day_number as dayNumber",
      "recipes.name as recipeName"
    )
    .then((days) => {
      return days.reduce((reducedPlan, planAndRecipes) => {
        const day = planAndRecipes.dayNumber
        if (!reducedPlan[day]) {
          reducedPlan[day] = {
            dayNumber: planAndRecipes.dayNumber,
            recipes: [],
          }
        }
        reducedPlan[day].recipes.push({
          recipeId: planAndRecipes.recipeId,
          recipeName: planAndRecipes.recipeName,
          recipeImage: planAndRecipes.recipeImage
        })

        return reducedPlan
      }, {})
    })
    .then((reducedPlan) => {
      return Object.values(reducedPlan)
    })
}

function getPlanIdByUserId(userId, db = connection) {
  return db("plans")
    .where("user_id", userId)
    .select("id as planId")
}

module.exports = {
  createPlan,
  getPlanByPlanId,
  editPlan,
  getPlanIdByUserId,
}