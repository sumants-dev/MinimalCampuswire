const User = require('../models/user')

const signupErrorHandler = (err, req, res, next) => {
  if (err.message === 'Error: Signup Empty Fields') {
    res.send('Error: Empty fields for signup')
  } else if (User.count({ username: req.body.username }) !== 0 && err.name === 'MongoError') {
    res.send('Error: Username already exists')
  } else {
    next(err, req, res)
  }
}

module.exports = signupErrorHandler
