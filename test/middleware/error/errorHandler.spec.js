const http = require('http')
const createError = require('http-errors')

describe('middleware/errorHandler', () => {
  let errorHandler
  let res

  beforeEach(() => {
    res = {
      status: sinon.stub().returns(res),
      json: sinon.stub().returns(res)
    }

    errorHandler = require('../../../src/middleware/error/errorHandler')
  })

  it('should handle client errors', () => {
    const err = createError(404)

    errorHandler()(err, null, res)

    expect(res.json).to.have.been.calledWith({
      message: http.STATUS_CODES[404]
    })
  })

  it('should handle server errors', () => {
    const err = createError(500, 'boom')

    errorHandler()(err, null, res)

    expect(res.json).to.have.been.calledWith({ message: http.STATUS_CODES[500] })
  })

  it('should handle other errors as server errors', () => {
    const err = createError(200, 'boom')

    errorHandler()(err, null, res)

    expect(res.json).to.have.been.calledWith({ message: http.STATUS_CODES[500] })
  })

  it('should handle uncaught errors', () => {
    const err = new Error('boom')

    errorHandler()(err, null, res)

    expect(res.json).to.have.been.calledWith({ message: http.STATUS_CODES[500] })
  })

  it('should support custom loggers', () => {
    const req = {}
    const err = new Error('boom')
    const log = { error: sinon.stub() }

    errorHandler(log)(err, req, res)

    expect(log.error).to.have.been.calledWith({ err, req })
  })
})
