const connection = require('./connection')

function getRecipes(db = connection) {
    return db('recipes').select('id as recipeId', 'name as recipeName', 'image')
}

module.exports = {
    getRecipes
}