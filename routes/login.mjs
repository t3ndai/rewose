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

export function getRegister (req, res) {
  const page = 'Register'
  res.render('login/login', { page: page })
}

export function postRegister (req, res) {
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
          res
            .status(201)
            .cookie('access_token', 'Bearer' + token, {
              expires: new Date(Date.now() * 24 * 3_600_000),
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
        res.send('Please try again, we had error!')
      })
  } else {
    res.send('Pass in valid data')
  }
}

// Login

export function getLogin (req, res) {
  const page = 'Login'
  res.render('login/login', { page: page })
}

export function postLogin (req, res) {
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
          res
            .status(200)
            .cookie('access_token', 'Bearer' + token, {
              expires: new Date(Date.now() + 24 * 3600000),
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
        res.send('Please try again, we had an error!')
        console.log(err)
      })
  } else {
    res.send('pass in valid data')
  }
}
