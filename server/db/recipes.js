const connection = require('./connection')

function getRecipes(db = connection) {
    return db('recipes').select('id as ')
}