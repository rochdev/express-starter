const express = require('express')
const bodyParser = require('body-parser')
const bunyanMiddleware = require('bunyan-middleware')
const compression = require('compression')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const notFoundHandler = require('./middleware/notFoundHandler')
const log = require('./log')
const routes = require('./routes')

const app = express()

app.disable('x-powered-by')
app.use(compression())
app.use(bunyanMiddleware({
  headerName: 'X-Request-ID',
  logger: log
}))
app.options('*', cors())
app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
