import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'

import login from './routes/login.mjs'
import home from './routes/home.mjs'
import items from './routes/items.mjs'

// Set up Express
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'html')

app.use(morgan('dev'))

// Views

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

// Routing

app.use('/home', home)
app.use('/items', items)
app.use(login)

app.listen(8000, '0.0.0.0', () => {
  console.log('listening on port 8000')
})
