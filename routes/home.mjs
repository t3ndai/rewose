// Home Page
import express from 'express'

const home = express.Router()

function getHome (req, res) {
  res.render('home/home')
}

home.get('/', getHome)

export default home
