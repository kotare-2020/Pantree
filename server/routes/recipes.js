const express = require('express')
const db = require('../db/recipes')

const router = express.Router()


router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            res.status(500).send('cannot get recipes')
            console.log(err)
        })
})

router.get('/:recipeId', (req, res) => {
    db.getRecipeAndIngredientsById(req.params.recipeId)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            res.status(500).send('cannot get this recipe by id')
            console.log(err)
        })
})

router.post('/', (req, res) => {
    db.addRecipe(req.body)
        .then(() => {
            return db.getRecipes()
        })
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            res.status(500).send('cannot add recipe')
            console.log(err)
        })
})

router.post('/:recipeId/ingredients', (req, res) => {
    const id = req.params.recipeId
    db.addRecipeIngredients(req.body, id)
        .then(ingredients => {
            res.json(ingredients)
        })
        .catch(err => {
            res.status(500).send('cannot add ingredients')
            console.log(err)
        })
})

module.exports = router