const User = require('../models/user')

const signupErrorHandler = (err, req, res, next) => {
  console.log(err)
  if (err.message === 'Error: Signup Empty Fields') {
    res.status(400).send({ message: err.message })
  } else if (User.count({ username: req.body.username }) !== 0 && err.name === 'MongoError') {
    res.status(400).send({ message: 'Error: Username already exists' })
  } else {
    next(err, req, res)
  }
}

module.exports = signupErrorHandler
