const connection = require("./connection")

function addIngredientQuantities(ingredientId, recipeId, quantity, db = connection) {
    return db('recipes_ingredients')
    .insert(ingredientId, recipeId, quantity)
} 

module.exports = {
    addIngredientQuantities,
}