const express = require('express')
const router = express.Router()

const db = require('../db/plans')

router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getPlanById(id)
    .then(plan => {
      res.json(plan)
    })
    .catch(err => {
      res.status(500).send('it broke :/')
      console.log(err)
    })
})

router.post('/:id', (req, res) => {
  const newPlan = [{
    user_id: req.params.id,
    name: ''
  }]
  db.createPlan(newPlan)
    .then(plan => {
      res
        .json(plan)
        .sendStatus(201)
    })
    .catch(err => {
      res.status(500).send('it broke :/')
      console.log(err)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const plan = req.body
  db.editPlan(id, plan)
    .then(res.sendStatus(200))
    .catch(err => {
      res.status(500).send('it broke :/')
      console.log(err)
    })
})

router.get('/plans/:userId', (req, res) => {
  const userId = req.params.userId
  db.getPlanIdByUserId(userId).then(planId => {
    res.json(planId[0])
  })
})

module.exports = router
