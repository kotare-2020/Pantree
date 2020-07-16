const connection = require('./connection')

function getPlan(id, db = connection){
  console.log("DB "+ id)
  return db('plans')
    .where('id', id)
}

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

function joinPlanRecipes(plan, db=connection){
  console.log("DB " + plan)
  return db('plans')
  .join('recipes', 'plans.id', 'plans_recipes.plan_id')
  .join('recipes', 'recipe.id', 'plans_recipes.recipe_id')
  .where('plan_id', plan)

}

module.exports = {
  getPlan,
  addPlan,
  joinPlanRecipes,
  editPlan,
}