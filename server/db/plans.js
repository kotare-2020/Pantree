const connection = require("./connection")

function createPlan(newPlan, db = connection) {
  return db("plans")
  .insert(newPlan)
}

function editPlan(id, plan, db = connection) {
  return db("plans")
  .where("id", id)
  .update(plan)
}

function getPlanById(planId, db = connection) {
  return db("plans")
    .join("plans_recipes", "plans.id", "plans_recipes.plan_id")
    .join("recipes", "plans_recipes.recipe_id", "recipes.id")
    .where("plans.id", planId)
    .select(
      "recipes.id as recipeId",
      "plans.id as planId",
      "plans_recipes.day_number as dayNumber",
      " recipes.name as recipeName"
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
  getPlanById,
  editPlan,
  getPlanIdByUserId,
}