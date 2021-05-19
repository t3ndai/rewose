import { get_register } from './routes/login.mjs'

const express = require('express')
const http = require('http2')

const app = express()
const logger = require('morgan')
const path = require('path')

const server = http.createServer(app)

// Config

app.use(logger('dev'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Authentication

app.get('/register', get_register)

server.listen(800, '0.0.0.0')
