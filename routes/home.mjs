// Home Page
import express from 'express'

import auth from '../middleware/auth.mjs'

/*
* TODO
- subscribe logged in user to tags
- subscribe anon user to tags using rss
*/

const home = express.Router()
//home.use(auth.sessionValid)

function getHome (req, res) {
  res.render('home/home')
}

home.get('/', getHome)

export default home
