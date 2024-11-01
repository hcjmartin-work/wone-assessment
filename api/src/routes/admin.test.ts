
import { FastifyInstance } from 'fastify'
import { describe, it, after, mock, before } from 'node:test'
import assert from 'assert'
import * as app from '../app'
import { Http2SecureServer } from 'http2'

describe('/admin/ HTTP', () => {
  let instance: FastifyInstance<Http2SecureServer>

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

  it('POST /createForm returns status (200) when missing content', async () => {
    // Send an incomplete form create request
    const response = await instance.inject({
      method: 'POST',
      url: '/admin/createForm',
      headers: {"content-type": "application/json"},
      body: { content: "{'name':'test4','steps':[]}"},
    })

    // Expect a 400 response
    assert.strictEqual(response.statusCode, 400)
  })

})
