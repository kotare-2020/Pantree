const connection = require('./connection')

function getShoppingList(planId, db = connection) {
    return db('plans_recipes')
        .join('recipes_ingredients', 'plans_recipes.recipe_id', 'recipes_ingredients.recipe_id')
        .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
        .select('ingredients.id AS ingredientId', 'recipes_ingredients.quantity AS quantity', 'ingredients.name AS ingredientName', 'ingredients.unit AS ingredientUnit')
        .where('plan_id', planId)
        .then(recipes => {
            return recipes.reduce((reducedIngredients, recipeAndIngredients) => {
                const id = recipeAndIngredients.ingredientId

                if (!reducedIngredients[id]) {
                    reducedIngredients[id] = {
                        ingredientId: recipeAndIngredients.ingredientId,
                        ingredientName: recipeAndIngredients.ingredientName,
                        ingredientUnit: recipeAndIngredients.ingredientUnit,
                        quantity: 0
                    }
                }

                reducedIngredients[id].quantity += recipeAndIngredients.quantity
                return reducedIngredients
            }, {})
        })
        .then(reducedIngredients => {
            return Object.values(reducedIngredients)
        })
}

module.exports = {
    getShoppingList,
}