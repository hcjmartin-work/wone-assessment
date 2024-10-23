
import { FastifyInstance } from 'fastify'
import { describe, it, after, mock, before } from 'node:test'
import assert from 'assert'
import * as app from '../app'

describe('/admin/ HTTP', () => {
  let instance: FastifyInstance

  before(async () => {
    instance = await app.buildApp({ logger: false })
  })

  after(async () => {
    await instance.close()
  })

  // Simple Test example
  it('GET /test returns "Test Complete"', async () => {
    const response = await instance.inject({
      method: 'GET',
      url: '/admin/test'
    })

    assert.strictEqual(response.statusCode, 200)
    assert.equal(response.body, "Test Complete")
  })

  it('GET /test returns "Test Complete"', async () => {
    const response = await instance.inject({
      method: 'GET',
      url: '/admin/test'
    })

    assert.strictEqual(response.statusCode, 200)
    assert.equal(response.body, "Test Complete")
  })

})
