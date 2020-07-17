const express = require('express')
const router = express.Router()

const db = require('../db/shopping-list')

router.get("/:planId", (req, res) => {
    db.getShoppingList(req.params.planId)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).send( "failed to get /shopping-list" )
        console.log(err)
    })
})


module.exports = router