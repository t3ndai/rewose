import validator from 'validator'
import axios from 'axios'

const authApiKey = 'TCtv7UHNCk-Si1GR-TnCES16Cng7CuZDmis5n9uSC_c_-OCAYqwtAESF'
const applicationId = 'a1f573fc-5523-49f5-a25b-a852e274e70d'
const faUrl = 'http://localhost:9011/api/'
const headers = { Authorization: authApiKey, 'Content-type': 'application/json' }

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
  reply.view('login/login', { page: page })
}

function postRegister (req, reply) {
  const email = req.body.email
  const password = req.body.password

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    axios({
      method: 'POST',
      url: faUrl + 'user',
      headers: headers,
      data: {
        user: {
          email: email,
          password: password
        }
      }
    })
      .then(r => {
        if (r.status === 200) {
          const token = r.data.token
          reply
            .status(201)
            .cookie('access_token', 'Bearer' + token, {
              expireply: new Date(Date.now() * 24 * 3_600_000),
              httpOnly: true,
              sameSite: true
            })
            .redirect('/home')
        } else {
          throw Error('Auth Service Error')
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
  reply.view('login/login', { page: page })
}

function postLogin (req, reply) {
  const email = req.body.email
  const password = req.body.password

  if (validator.isEmail(email) && !validator.isEmpty(password)) {
    axios({
      method: 'POST',
      url: faUrl + 'login',
      headers: headers,
      data: { loginId: email, password: password, applicationId: applicationId }
    })
      .then(r => {
        if (r.status === 200) {
          const token = r.data.token
          reply
            .status(200)
            .cookie('access_token', 'Bearer' + token, {
              expireply: new Date(Date.now() + 24 * 3600000),
              httpOnly: true,
              sameSite: true
            })
            .redirect('/home')
        } else {
          console.log(r.data)
          throw Error('Auth Service Error')
        }
      })
      .catch(err => {
        reply.send('Please try again, we had an error!')
        console.log(err)
      })
  } else {
    reply.send('pass in valid data')
  }
}

export default function (app, opts, done) {
  // Authentication

  app.get('/register', getRegister)
  app.post('/register', postRegister)

  app.get('/login', getLogin)
  app.post('/login', postLogin)

  done()
}
