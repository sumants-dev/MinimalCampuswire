const questionErrorHandler = (err, req, res, next) => {
  if (err.message === 'Error: Question Add Fields') {
    res.send('Error: Question Add Fields')
  } else if (err.message === 'Error: Question already exists') {
    res.send('Error: Question already exists')
  } else {
    next(err, req, res)
  }
}

module.exports = questionErrorHandler
