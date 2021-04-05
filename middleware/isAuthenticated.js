const express = require('express')

const isAuthenticated = (req, res, next) => {
  console.log(req.session.username)
  if (req.session.username !== '' && req.session.username !== null) {
    next()
  } else {
    next(new Error('Not Authenticated'))
  }

}

module.exports = isAuthenticated