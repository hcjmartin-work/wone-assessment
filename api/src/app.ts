'use strict'

import adminRoutes from "./routes/admin"
import fastify from 'fastify'
import formRoutes from "./routes/forms"
import cors from '@fastify/cors'

export function buildApp(opts: any) {
  const app = fastify(opts)

  app.register(cors, {
    origin: "*"
  })

  app.register(adminRoutes, { prefix: "/admin" })
  app.register(formRoutes, { prefix: "/form" })

  app.get('/ping', async function (request: any, reply: any) {
    return 'pong'
  })

  console.log(`Server built`)

  return app
}