
const authenticationErrorHandler = (err, req, res, next) => {
  if ((req.session.username === '' || req.session.username === null) && err.message === 'Not Authenticated') {
    console.log('Authentication Error Handling')
    res.send('Error: User is not logged in')
  } else {
    next(err, req, res)
  }
}

module.exports = authenticationErrorHandler