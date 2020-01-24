const restful = require('node-restful')
const { Schema } = require('mongoose')

const TaskSchema = new Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false }
}, {
  timestamps: true
})

module.exports = restful.model('Task', TaskSchema)
