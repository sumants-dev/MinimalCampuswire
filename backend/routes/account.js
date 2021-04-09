const express = require('express')
const User = require('../models/user')
const isAuthenticated = require('../middleware/isAuthenticated')

const router = express.Router()

router.get('/loggedUser', async (req, res, next) => {
  res.send(req.session.username)
})

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body

    if (username === undefined || username === '' || username === null
        || password === undefined || password === '' || password === null) {
      throw new Error('Error: Signup Empty Fields')
    }
    await User.create({ username, password })
    res.status(200).send('User Created')
  } catch (error) {
    next(error, req, res)
  }
})

router.post('/login', (req, res, next) => {
  const { username, password } = req.body

  try {
    User.findOne({ username, password }, (err, user) => {
      if (user) {
        req.session.username = username
        req.session.password = password
        res.send('logged in')
      } else {
        res.status(400).send({ message: 'Error: User and Pass Combo wrong' })
      }
    })
  } catch (error) {
    next(error, req, res)
  }
})

router.post('/logout', isAuthenticated, (req, res, next) => {
  try {
    req.session.username = null
    req.session.password = null
    res.send('user logged out')
  } catch (error) {
    next(error, req, res)
  }
})

module.exports = router
