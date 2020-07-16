const express = require('express')

const db = require('../db/recipes')

const router = express.Router()


router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
})

router.get('/:recipeId', (req, res) => {
    db.getRecipeAndIngredientsById(req.params.recipeId)
        .then(recipe => {
            res.json(recipe)
        })
})

module.exports = router