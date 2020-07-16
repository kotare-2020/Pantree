const express = require('express')
const router = express.Router()

const db = require('../db/plans')

// root URL 'api/v1/plans'

router.get("/:id", (req, res) => {
  console.log('plans route')
  const id = req.params.id

  db.joinPlanRecipes(id)
  .then(plan=>{
      res.json({plan})
      // console.log("route "+ plan)
  })
  .catch(err => {
      res.status(500).send( "it broke :/" )
      console.log(err)
  })
})

// router.post('/', (req, res)=>{


// })



module.exports = router