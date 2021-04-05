const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const MONGO_URI = 'mongodb://localhost:27017/cw-lite'
const port = process.env.PORT || 3000

const accountRouter = require('./routes/account')
const apiRouter = require('./routes/api')

const authenticationErrorHandler = require('./middleware/authenticationErrorHandler')
const signupErrorHandler = require('./middleware/signupErrorHandler')

const app = express()

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cookieSession({
  name: 'session',
  keys: ['thisissorandom'],
}))

app.use(express.json())

// Account Router
app.use('/account', accountRouter)
app.use('/api', apiRouter)

app.use(authenticationErrorHandler)
app.use(signupErrorHandler)

app.listen(port, () => {
  console.log('mongoDB is connected')
  console.log(`listening on ${port}`)
})