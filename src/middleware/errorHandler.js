const log = require('../log')

const errorHandler = (err, req, res, next) => {
  log.error({ err, req }, 'Uncaught error')
  res.status(500).send()
}

module.exports = errorHandler
