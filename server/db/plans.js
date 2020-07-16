const connection = require('./connection')

// function getPlan(id, db = connection){
//   console.log("DB "+ id)
//   return db('plans')
//     .where('id', id)
//     .select()
// }

function addPlan(user_id,plan, db=connection){
  console.log("DB "+ user_id + plan)
  return db('plans')
    .where("user_id", user_id)
    .insert(plan)
}

function editPlan(id, plan, db=connection){
  return db('plans')
  .where("id", id)
  .update(plan)
}

function joinPlanRecipes(planId, db=connection){
  console.log("DB " + planId)
  
  return db('plans')
  .join('plans_recipes', 'plans.id', 'plans_recipes.plan_id' )
  .join('recipes','plans_recipes.recipe_id', 'recipes.id')
  .where('plans.id', planId)
  .select( 'recipes.id as recipeId', 'plans.id as planId', 'plans_recipes.day_number as dayNumber', ' recipes.name as recipeName')
  .then(days => {
    return days.reduce((reducedPlan, planAndRecipes)=>{
      const id = planAndRecipes.planId

      if(!reducedPlan[id]){
        reducedPlan[id] = {
          dayNumber: planAndRecipes.dayNumber,
          recipes: []
        }
      }

      reducedPlan[id].recipes.push({
          recipeId: planAndRecipes.recipeId,
          recipeName: planAndRecipes.recipeName
        })




      return reducedPlan
      }, {})
    })
    .then(reducedPlan => {
      return Object.values(reducedPlan)
    })
}

module.exports = {
  // getPlan,
  addPlan,
  joinPlanRecipes,
  editPlan,
}