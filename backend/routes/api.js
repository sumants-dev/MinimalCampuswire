const express = require('express')
const Question = require('../models/question')
const isAuthenticated = require('../middleware/isAuthenticated')

const router = express.Router()

router.get('/questions', async (req, res, next) => {
  try {
    const questions = await Question.find({})
    res.send(questions)
  } catch (error) {
    next(error, res, req)
  }
})

router.post('/questions/add', isAuthenticated, async (req, res, next) => {
  const { questionText, author } = req.body

  try {
    if (questionText === undefined || questionText === '' || questionText === null
    || author === undefined || author === '' || author === null) {
      throw new Error('Error: Question Add Fields')
    }

    if (Question.count({ questionText }) !== 0) {
      throw new Error('Error: Question already exists')
    }

    await Question.create({ questionText, author })
    res.send('Question Created')
  } catch (error) {
    next(error, req, res)
  }
})

router.post('/questions/answer', isAuthenticated, async (req, res, next) => {
  const { id, answer } = req.body

  try {
    await Question.findByIdAndUpdate(id, { answer })
    res.send('Question Answered')
  } catch (error) {
    next(error, req, res)
  }
})

module.exports = router
