const express = require('express')

const isAuthenticated = (req, res, next) => {
  if (req.session.username !== '' && req.session.username !== null) {
    next()
  } else {
    next(new Error('Not Authenticated'))
  }

}

module.exports = isAuthenticated