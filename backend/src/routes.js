const express = require('express')
const routes = express.Router()

const TaskController = require('./controllers/Task')

TaskController.register(routes, '/tasks')

module.exports = routes
