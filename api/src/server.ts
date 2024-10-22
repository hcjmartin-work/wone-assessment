'use strict'

const server = require('./app')({
})

server.listen({ port: 3000 }, (err: any, address: any) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})