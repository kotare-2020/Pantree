const express = require('express')
const db = require('../db/ingredients')

const router = express.Router()

router.post('/', (req, res) => {
    db.addIngredients(req.body)
        .then(ingredients => {
            res.json(ingredients)
        })
        .catch(err => {
            res.status(500).send('cannot add ingredients')
            console.log(err)
        })
})

module.exports = router