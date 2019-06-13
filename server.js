const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()
const login = require('./views/login') // make sure linked properly to login.hbs in views

// Middleware

server.engine('hbs', hbs({extname: '.hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

module.exports = server
