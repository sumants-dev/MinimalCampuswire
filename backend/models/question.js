const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  author: { type: String, required: true },
  answer: { type: String, required: false },
})

module.exports = model('Question', questionSchema)
