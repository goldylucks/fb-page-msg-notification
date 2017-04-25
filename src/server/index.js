const path = require('path')
const express = require('express')

const app = express()
const token = process.env.VERIFY_TOKEN || 'qwer'

app.get('/fb-page-message-webhook', function (req, res) {
  const { mode, challenge, verify_token } = req.params
  if (verify_token !== token) {
    throw new Error('invalid verify token')
  }
  res.send(hub.challenge)
})

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '..', 'index.html'))
// })



// app.get('/app.js', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '..', 'app.js'))
// })

app.listen(process.env.PORT || 3000, () => {
  console.log('express server listening on port 3000')
})
