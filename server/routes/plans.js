const express = require('express')
const router = express.Router()

const db = require('../db/plans')

// root URL '/api/v1/plans'

router.get("/:id", (req, res) => {
  const id = req.params.id
  db.getPlanById(id)
  .then(plan=>{
      res.json(plan)
  })
  .catch(err => {
      res.status(500).send( "it broke :/" )
      console.log(err)
  })
})


module.exports = router