'use strict'

import adminRoutes from "./routes/admin"
import fastify from 'fastify'
import formRoutes from "./routes/forms"

export function buildApp(opts={}) {
  const app = fastify(opts)

  app.register(adminRoutes, { prefix: "/admin" })
  app.register(formRoutes, { prefix: "/form" })

  app.get('/ping', async function (request: any, reply: any) {
    return 'pong'
  })

  return app
}