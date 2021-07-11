import validator from 'validator'
import express from 'express'
import sanitizeHtml from 'sanitize-html'
import auth from '../services/auth.mjs'
import multer from 'multer'


const login = express.Router()

const upload = multer()
/*

ToDo

 - handle auth wrong credentials
 - handle auth service down
 - handle auth user already exists
 -
*/

// Register

const cookieExpiryDuration = 24 * 1000 * 60 * 60 * 60 // expire cookie in 60 days

function getRegister (req, reply) {
  const page = 'Register'
  reply.render('login/login.html', { page: page })
}

function postRegister (req, reply, next) {
  console.log(req.body)
  const email = sanitizeHtml(req.body.email)
  const password = sanitizeHtml(req.body.password)

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    auth.register(email, password)
      .then(authResult => {
        switch (authResult.msg) {
          case 'ok':
            return reply
              .status(201)
              .cookie('user_id', authResult.data.userId, {
                expires: new Date(Date.now() + cookieExpiryDuration),
                httpOnly: true,
                sameSite: true,
                signed: true
              })
              .json({user: { name: authResult.data.userName }})
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

function postLogin (req, reply) {
  const email = sanitizeHtml(req.body.email)
  const password = sanitizeHtml(req.body.password)

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    auth.login(email, password)
      .then(authResult => {
        switch (authResult.msg) {
          case 'ok':
            console.log(authResult.data)
            return reply
              .status(200)
              .cookie('user_id', authResult.data, {
                expires: new Date(Date.now() + cookieExpiryDuration),
                httpOnly: true,
                sameSite: true,
                signed: true
              })
              .json({user: { name: authResult.data.userName }})
          case 'error':
            return reply
              .status(404)
              .redirect('/login')
        }
      }).catch(err => {
        console.log(err)
        reply.send('Please try again, we had an error!')
      })
  } else {
    reply.send('pass in valid data')
  }
}

/* 
* Logout 
*/
function getLogout(req, res) {
  return res 
          .status(200)
          .clearCookie('user_id')
}

//login.get('/register', getRegister)
login.post('/register', postRegister)

//login.get('/login', getLogin)
login.post('/login', postLogin)

export default login
