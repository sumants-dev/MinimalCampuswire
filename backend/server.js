// Imports
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const path = require('path')

const accountRouter = require('./routes/account')
const apiRouter = require('./routes/api')

const authenticationErrorHandler = require('./middleware/authenticationErrorHandler')
const signupErrorHandler = require('./middleware/signupErrorHandler')
const questionErrorHandler = require('./middleware/questionsErrorHandler')
const loginErrorHandler = require('./middleware/loginErrorHandler')

// Initialization variables
const MONGO_URI = 'mongodb://localhost:27017/cw-lite'
const port = process.env.PORT || 3000

const app = express()

// Middleware
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(cookieSession({
  name: 'session',
  keys: ['thisissorandom'],
}))

// INTEGRATION
app.use(express.static('dist'))

app.use(express.json())

// Routers
app.use('/account', accountRouter)
app.use('/api', apiRouter)

// Error handling
app.use(authenticationErrorHandler)
app.use(signupErrorHandler)
app.use(loginErrorHandler)
app.use(questionErrorHandler)

// INTEGRATION
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// Start Server
app.listen(port, () => {
  console.log('mongoDB is connected')
  console.log(`listening on ${port}`)
})
