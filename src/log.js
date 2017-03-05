const bunyan = require('bunyan')

const log = bunyan.createLogger({
  name: 'app',
  level: process.env.LOG_LEVEL || 'info',
  serializers: bunyan.stdSerializers
})

module.exports = log
