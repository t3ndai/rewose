import axios from 'axios'

const authApiKey = 'TCtv7UHNCk-Si1GR-TnCES16Cng7CuZDmis5n9uSC_c_-OCAYqwtAESF'
const applicationId = 'a1f573fc-5523-49f5-a25b-a852e274e70d'
const faUrl = 'http://localhost:9011/api/'
const headers = { Authorization: authApiKey, 'Content-type': 'application/json' }

async function register (email, password) {
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
      if (r.status >= 200 && r.status < 300) {
        console.log(r.data)
        const token = r.data.token
        return { msg: 'ok', data: token }
      } else if (r.status >= 500) {
        console.log(r.data)
        throw Error('Auth Service Error')
      } else if (r.status >= 400 && r.status < 500) {
        return { msg: 'error', data: 'Authentication credentials wrong' }
      }
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

function login (email, password) {
  axios({
    method: 'POST',
    url: faUrl + 'login',
    headers: headers,
    data: { loginId: email, password: password, applicationId: applicationId }
  })
    .then(r => {
      if (r.status >= 200 && r.status < 300) {
        const token = r.data.token
        return { msg: 'ok', data: token }
      } else if (r.status >= 500) {
        console.log(r.data)
        throw Error('Auth Service Error')
      } else if (r.status >= 400 && r.status < 500) {
        return { msg: 'error', data: 'Authentication credentials wrong' }
      }
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

function authResponseUtil () {

}

const auth = {
  register: register,
  login: login
}

export default auth
