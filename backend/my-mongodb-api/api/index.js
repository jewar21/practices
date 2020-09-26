const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/users', users)

app.listen(3002)

module.exports = app
