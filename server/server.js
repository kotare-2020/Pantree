const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const plans = require('./routes/plans')
const recipes = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/users', userRoutes)
server.use('api/v1/plans', plans)
server.use('/api/v1/recipes', recipes)

module.exports = server