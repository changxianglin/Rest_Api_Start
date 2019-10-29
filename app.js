const express = require('express')

const app = new express()

app.get('/', (req, res) => {
  res.send('We are on home')
})

app.post('/posts', (req, res) => {
  ses.send('We are on posts')
})

app.listen(3000)
