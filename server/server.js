const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server