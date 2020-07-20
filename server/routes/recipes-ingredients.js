const express = require('express')
const db = require('../db/recipes-ingredients')

const router = express.Router()

router.post('/', (req, res) => {
    const qauntity = req.body
    // const recipeId = 
    // const ingredientId = 
    db.addIngredientQuantities(req.body)
        .then(row => {
            res.json(row)
        })
        .catch(err => {
            res.status(500).send('cannot add ingredients')
            console.log(err)
        })
})

module.exports = router