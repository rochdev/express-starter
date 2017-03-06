const http = require('http')

const errorHandler = (logger) => {
  if (!logger) {
    logger = {
      error: console.error.bind(console) // eslint-disable-line no-console
    }
  }

  return (err, req, res, next) => {
    const status = err.status || err.statusCode || 500
    const body = {}

    res.status(status)

    // internal server errors
    if (status >= 500) {
      logger.error({ err, req }, err.message)
      body.message = http.STATUS_CODES[status]
      res.json(body)
      return
    }

    // client errors
    body.message = err.message
    body.name = err.name

    res.json(body)
  }
}

module.exports = errorHandler
