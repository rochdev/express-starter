const express = require('express')
const errorHandler = require('./errorHandler')
const notFoundHandler = require('./notFoundHandler')

module.exports = (options = {}) => {
  const handler = express()

  handler.use(notFoundHandler)
  handler.use(errorHandler(options.logger))

  return handler
}
