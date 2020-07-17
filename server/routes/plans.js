const express = require('express')
const router = express.Router()

const db = require('../db/plans')

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

router.post("/", (req, res)=>{
  const plan = req.body
  const userId = req.body.id
  db.createPlan(userId, plan)
  .then(plan=>{
      res.json(plan[0]) 
  })
  .catch(err => {
    res.status(500).send( "it broke :/" )
    console.log(err)
})
})

router.patch("/:id", (req, res)=>{
  const id= req.params.id
  const plan = req.body
  db.editPlan(id, plan)
  .then( 
      res.sendStatus(200)
)
  .catch(err => {
    res.status(500).send( "it broke :/" )
    console.log(err)
})
})


module.exports = router