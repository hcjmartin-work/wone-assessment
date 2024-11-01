"use strict";

import path from "path";
import * as app from "./app";
import * as dotenv from "dotenv";
import fs from 'fs';

dotenv.config();

const server = app.buildApp({
  https: {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
  },
});

server.listen({ port: 3000 }, (err: any, address: any) => {
  console.log(`Server listening at ${address}`)

  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
