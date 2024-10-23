'use strict'

import * as app from "./app"
import * as dotenv from 'dotenv';

dotenv.config();

const server = app.buildApp({});
server.listen({ port: 3000 }, (err: any, address: any) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})