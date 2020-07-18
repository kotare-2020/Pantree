const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.get("/", (req, res) => {
    db.getUsers()
    .then(users=>{
        res.json( {users})
    })
    .catch(err => {
        res.status(500).send( "failed to get /users" )
        console.log(err)
    })
})


module.exports = router