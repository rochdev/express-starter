const express = require('express')
const errorHandler = require('./errorHandler')
const notFoundHandler = require('./notFoundHandler')

const handler = express()

handler.use(notFoundHandler)
handler.use(errorHandler)

module.exports = () => handler
