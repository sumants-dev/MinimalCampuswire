const loginErrorHandler = (err, req, res, next) => {
  if (err.message === 'Username & Pass combo not found') {
    res.status(400).send({ message: err.message })
  } else {
    next(err, req, res)
  }
}

module.exports = loginErrorHandler
