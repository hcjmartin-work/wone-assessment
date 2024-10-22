
import { FastifyInstance } from 'fastify'
import { describe, it, after, mock } from 'node:test'
import assert from 'assert'
import buildApp from '../app'

describe('GET /ping HTTP', () => {
  let app: FastifyInstance

  after(async () => {
    await app.close()
  })

  it('GET /ping returns "pong"', async () => {


    app = await buildApp({ logger: false })

    const response = await app.inject({
      method: 'GET',
      url: '/ping'
    })

    assert.strictEqual(response.statusCode, 200)
    assert.equal(response.body, "pong")

    mock.reset()
  })

})
