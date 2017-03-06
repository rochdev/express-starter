const http = require('http')
const log = require('../../log')

const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500
  const body = {}

  res.status(status)

  // internal server errors
  if (status >= 500) {
    log.error({ err, req }, err.message)
    body.message = http.STATUS_CODES[status]
    res.json(body)
    return
  }

  // client errors
  body.message = err.message
  body.name = err.name

  res.json(body)
}

module.exports = errorHandler
