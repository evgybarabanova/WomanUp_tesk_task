require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { PORT } = process.env
const dbcheck = require('./db/dbConnection')

const api = express()

dbcheck()

api.use(cors())

api.use(express.json())

api.use(morgan('dev'))

// requiring routes files
const noteRoutes = require('./routes/noteRoutes')

// middlewaries

// routes
api.use('/notes', noteRoutes)

api.listen(PORT ?? 3003, () => {
  console.log('Server started')
})
