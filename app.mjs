import express from 'express'
import path, { dirname } from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'

import * as login from './routes/login.mjs'
import * as home from './routes/home.mjs'
import * as items from './routes/items.mjs'

const app = express()
const logger = morgan('dev')

// Config
app.use(logger)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')
//app.set('views', path.join(dirname('.'), 'views'))

// Authentication

app.get('/register', login.getRegister)
app.post('/register', login.postRegister)

app.get('/login', login.getLogin)
app.post('/login', login.postLogin)

// Home
app.get('/home', home.getHome)

// Items
app.get('/newItem', items.newItem)
app.post('/createItem', items.createItem)
app.post('/attachment', items.uploadAttachment)

app.listen(8000, () => {
  console.log('listening on port 8000')
})
