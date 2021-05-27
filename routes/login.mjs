import validator from 'validator'
import express from 'express'

import auth from '../services/auth.mjs'

const login = express.Router()

/*

ToDo

 - handle auth wrong credentials
 - handle auth service down
 - handle auth user already exists
 -
*/

// Register

function getRegister (req, reply) {
  const page = 'Register'
  reply.render('login/login.html', { page: page })
}

function postRegister (req, reply) {
  const email = req.body.email
  const password = req.body.password

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    auth.register(email, password)
      .then(authResult => {
        switch (authResult.msg) {
          case 'ok':
            return reply
              .status(201)
              .cookie('user_id', authResult.data, {
                expireply: new Date(Date.now() * 24 * 3_600_000),
                httpOnly: true,
                sameSite: true,
                signed: true
              })
              .redirect('/home')
          case 'error':
            return reply
              .status(404)
              .redirect('/register')
        }
      })
      .catch(err => {
        console.log(err)
        reply.send('Please try again, we had error!')
      })
  } else {
    reply.send('Pass in valid data')
  }
}

// Login

function getLogin (req, reply) {
  const page = 'Login'
  reply.render('login/login.html', { page: page })
}

function postLogin (req, reply, next) {
  const email = req.body.email
  const password = req.body.password

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    auth.login(email, password)
      .then(authResult => {
        switch (authResult.msg) {
          case 'ok':
            return reply
              .status(200)
              .cookie('user_id', authResult.data, {
                expireply: new Date(Date.now() + 24 * 3600000),
                httpOnly: true,
                sameSite: true,
                signed: true
              })
              .redirect('/home')
          case 'error':
            return reply
              .status(404)
              .redirect('/login')
        }
      }).catch(err => {
        reply.send('Please try again, we had an error!')
        console.log(err)
      })
  } else {
    reply.send('pass in valid data')
  }
}

login.get('/register', getRegister)
login.post('/register', postRegister)

login.get('/login', getLogin)
login.post('/login', postLogin)

export default login
