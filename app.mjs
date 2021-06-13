
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import consolidate from 'consolidate'

import login from './routes/login.mjs'
import home from './routes/home.mjs'
import items from './routes/items.mjs'
import collections from './routes/collections.mjs'

// Set up Express
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('super_secret'))

app.use(express.static('public'))

app.use(morgan('dev'))

// Views
app.engine('html', consolidate.nunjucks)
app.set('view engine', 'html')
app.set('views', 'views')

// Routing

app.use('/home', home)
app.use('/items', items)
app.use(login)
app.use('/collections', collections)

app.listen(8000, '0.0.0.0', () => {
  console.log('listening on port 8000')
})
