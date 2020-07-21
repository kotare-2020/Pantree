const connection = require("./connection")

function getIngredientsByName(ingredientNames, db = connection) {
    return db('ingredients')
    .select()
    .whereIn('name', ingredientNames)
}

function addIngredients(ingredientList, db = connection) {
    return getIngredientsByName(ingredientList.map(ingredient => ingredient.name))
        .then(existingIngredients => {
            const existingNames = existingIngredients.map(ingredient => ingredient.name)
            return ingredientList.filter(ingredient => !existingNames.includes(ingredient.name))
        })
        .then(newIngredients => {
            return newIngredients
        })
        .then(newIngredients => {
            if (newIngredients.length > 0) {
                return db('ingredients').insert(newIngredients)
            } else {
                return
            }
        })
        .then(() => {
            return getIngredientsByName(ingredientList.map(ingredient => ingredient.name))
        })
} 

module.exports = {
    addIngredients
}