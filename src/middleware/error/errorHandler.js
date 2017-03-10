const http = require('http')

const errorHandler = (logger) => {
  if (!logger) {
    logger = {
      error: console.error.bind(console) // eslint-disable-line no-console
    }
  }

  return (err, req, res, next) => {
    const status = err.status || err.statusCode || 500
    res.statusCode = status

    const body = {}

    if (status >= 500) {
      // internal server errors
      logger.error({ err, req }, err.message)
      body.message = http.STATUS_CODES[status]
    } else {
      // client errors
      Object.assign(body, err)
    }

    res.json(body)
  }
}

module.exports = errorHandler
