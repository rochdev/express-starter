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

    errorHandler = require('../../src/middleware/errorHandler')
  })

  it('should handle client errors', () => {
    const err = createError(404)

    errorHandler(err, null, res)

    expect(res.json).to.have.been.calledWith({
      name: 'NotFoundError',
      message: http.STATUS_CODES[404]
    })
  })

  it('should handle server errors', () => {
    const err = createError(500, 'boom')

    errorHandler(err, null, res)

    expect(res.json).to.have.been.calledWith({ message: http.STATUS_CODES[500] })
  })

  it('should handle uncaught errors', () => {
    const err = new Error('boom')

    errorHandler(err, null, res)

    expect(res.json).to.have.been.calledWith({ message: http.STATUS_CODES[500] })
  })
})
