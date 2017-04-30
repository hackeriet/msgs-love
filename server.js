const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const messagePath = process.env.MESSAGE_PATH || '/tmp'
const getFilename = () => path.join(messagePath, Date.now() + '.txt')

app.use(require('body-parser').json())

app.post('/msg', (req, res, next) => {
  const msg = req.body.msg

  if (!msg.length) return next('Too short')
  if (msg.length > 21) return next('Too long')

  fs.writeFile(getFilename(), msg, (err) => {
    if (err) return next(err)
    res.json({message: 'so much love'})
  })
})

app.use((req, res) => {
  res.status(404).send('not found')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('noooes </3')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
