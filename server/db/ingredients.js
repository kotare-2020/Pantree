const connection = require("./connection")

// addIngredients([
//     { name: 'egg', unit: 'each' },
//     { name: 'soap', unit: 'each' },
//     { name: 'steak', unit: 'kg' },
// ]).then(console.log).catch(console.log)

function getIngredientsByName(ingredientNames, db = connection) {
    console.log('ingredientNames', ingredientNames)
    return db('ingredients')
    .select()
    .whereIn('name', ingredientNames)
}

function addIngredients(ingredientList, db = connection) {
    return getIngredientsByName(ingredientList.map(ingredient => ingredient.name))
        .then(existingIngredients => {
            const existingNames = existingIngredients.map(ingredient => ingredient.name)
            //if ingredient is in list, throw away
            console.log(existingIngredients)
            return ingredientList.filter(ingredient => !existingNames.includes(ingredient.name))
        })
        .then(newIngredients => {
            console.log(newIngredients) 
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