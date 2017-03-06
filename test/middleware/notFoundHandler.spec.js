const createError = require('http-errors')

describe('middleware/notFoundHandler', () => {
  let notFoundHandler
  let next

  beforeEach(() => {
    next = sinon.stub()
    notFoundHandler = require('../../src/middleware/notFoundHandler')
  })

  it('should return a NotFoundError', () => {
    notFoundHandler(null, null, next)

    expect(next).to.have.been.calledWith(createError(404))
  })
})
