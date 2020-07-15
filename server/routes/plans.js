const express = require('express')
const db = require('../db/plans')

const router = express.Router()

// root URL 'api/v1/plans'

router.get("/:id", (req, res) => {
  const id = req.params.id
  db.getPlan(id)
  .then(plan=>{
      res.json( plan)
      console.log("route "+ plan)
  })
  .catch(err => {
      res.status(500).send( "it broke :/" )
      console.log(err)
  })
})




module.exports = router