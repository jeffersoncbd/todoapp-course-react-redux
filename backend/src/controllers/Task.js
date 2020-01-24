const TaskModel = require('../models/Task')

TaskModel.methods(['get', 'post', 'put', 'delete'])
TaskModel.updateOptions({ new: true, runValidators: true })

module.exports = TaskModel
