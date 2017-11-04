const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const MESSAGE_PATH = process.env.MESSAGE_PATH || '/tmp'

app.use(bodyParser.json())

app.post('/', (req, res, next) => {
  const msg = req.body.msg

  if (!msg.length) return next('Too short')
  if (msg.length > 21) return next('Too long')

  const filename = path.join(MESSAGE_PATH, Date.now().toString()) + '.txt'
  fs.writeFile(filename, msg, (err) => {
    if (err) return next(err)
    res.json({message: 'so much love'})
  })
})

app.use((req, res) => {
  res.status(404).send('not found')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('don\'t try to break me </3')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
