const express = require('express')
const router = express.Router()

const db = require('../db/shopping-list')

router.get("/:id", (req, res) => {
    db.getShoppingList(req.params.id)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).send( "failed to get /shopping-list" )
        console.log(err)
    })
})


module.exports = router