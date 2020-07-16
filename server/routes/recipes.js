const express = require('express')

const db = require('../db/recipes')

const router = express.Router()


router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
})


module.exports = router