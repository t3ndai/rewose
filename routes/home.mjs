// Home Page
import express from 'express'

import auth from '../middleware/auth.mjs'

const home = express.Router()
home.use(auth.sessionValid)

function getHome (req, res) {
  res.render('home/home')
}

home.get('/', getHome)

export default home
