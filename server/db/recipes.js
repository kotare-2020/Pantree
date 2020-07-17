const connection = require('./connection')

function getRecipes(db = connection) {
    return db('recipes').select('id as recipeId', 'name as recipeName', 'image')
}


function getRecipeAndIngredientsById(id, db = connection) {
    return db('recipes')
        .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
        .join('ingredients', 'ingredients.id', 'recipes_ingredients.ingredient_id').where('recipes.id', id)
        .select('*', 'recipes.id AS recipeId', 'recipes.name AS recipeName', 'ingredients.name AS ingredientName')
        .then(recipes => {
            return recipes.reduce((reducedRecipes, recipeAndIngredients) => {
                const id = recipeAndIngredients.recipeId

                if (!reducedRecipes[id]) {
                    reducedRecipes[id] = {
                        recipeId: recipeAndIngredients.recipeId,
                        recipeName: recipeAndIngredients.recipeName,
                        image: recipeAndIngredients.image,
                        method: recipeAndIngredients.method,
                        ingredients: []
                    }
                }

                reducedRecipes[id].ingredients.push({
                    ingredientName: recipeAndIngredients.ingredientName,
                    quantity: recipeAndIngredients.quantity,
                    unit: recipeAndIngredients.unit
                })

                return reducedRecipes
            }, {})
        })
        .then(reducedRecipes => {
            return Object.values(reducedRecipes)
        })
        .then(recipes => {
            console.log(recipes[0].ingredients)
            return recipes[0]
        })
}

module.exports = {
    getRecipes,
    getRecipeAndIngredientsById,
}