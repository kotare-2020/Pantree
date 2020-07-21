const connection = require('./connection')
const { addIngredients } = require('./ingredients')

function getRecipes(db = connection) {
    return db('recipes').select('id as recipeId', 'name as recipeName', 'image')
}

function getRecipeAndIngredientsById(id, db = connection) {
    return db('recipes')
        .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
        .join('ingredients', 'ingredients.id', 'recipes_ingredients.ingredient_id')
        .where('recipes.id', id)
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
            const recipe = recipes[0]
            recipe.method = JSON.parse(recipe.method)
            return recipe
        })
}

function addRecipe(recipe, db = connection) {
    return db('recipes').insert(recipe)
}

function addRecipeIngredients(recipeIngredients, recipeId, db = connection) {
    return addIngredients(recipeIngredients.map(ingredient => {
        return {name:ingredient.name, unit:ingredient.unit}
    }))
    .then(ingredients => {
        return db('recipes_ingredients')
            .insert(recipeIngredients.map(ingredient => {
                return {
                    quantity: ingredient.quantity, 
                    recipe_id: recipeId,
                    ingredient_id: ingredients.find(existingIngredient => existingIngredient.name == ingredient.name).id, 
                }
            }))
    })
}

module.exports = {
    getRecipes,
    getRecipeAndIngredientsById,
    addRecipe,
    addRecipeIngredients,
}