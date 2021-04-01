const express = require('express')
const router = require('./routes/account')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("hello world")
})


app.listen(port, () => {
  console.log('Listening on port ' + port)
})