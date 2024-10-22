'use strict'

import adminRoutes from "./routes/admin"
import fastify from 'fastify'

function buildApp(opts={}) {
  const app = fastify(opts)

  app.register(adminRoutes, { prefix: "/admin" })

  app.get('/ping', async function (request: any, reply: any) {
    return 'pong'
  })

  return app
}

export default buildApp