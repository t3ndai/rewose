import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import express from 'express'
import fastify from 'fastify'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import multer from 'fastify-multer'
import autoload from 'fastify-autoload'
import * as PointOfView from 'point-of-view'

const app = fastify({
  logger: {
    prettyPrint: true
  }
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.register(import('fastify-multipart'), { attachFieldsToBody: true })

app.register(PointOfView, {
  engine: {
    nunjucks: nunjucks
  },
  viewExt: 'html',
  root: join(__dirname, 'views')
})

app.register(autoload, {
  dir: join(__dirname, 'routes')
})

app.listen(8000, '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`listening on port ${address}`)
})
