const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const plansRoutes = require('./routes/plans')
const recipesRoutes = require('./routes/recipes')
const shoppingListRoutes = require('./routes/shopping-list')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/users', userRoutes)
server.use('api/v1/plans', plansRoutes)
server.use('/api/v1/recipes', recipesRoutes)
server.use('/api/v1/shopping-list', shoppingListRoutes)

module.exports = server