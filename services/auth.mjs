import axios from 'axios'

const authApiKey = 'TCtv7UHNCk-Si1GR-TnCES16Cng7CuZDmis5n9uSC_c_-OCAYqwtAESF'
const applicationId = 'a1f573fc-5523-49f5-a25b-a852e274e70d'
const faUrl = 'http://localhost:9011/api/'
const headers = { Authorization: authApiKey, 'Content-type': 'application/json' }

async function register (email, password) {
  return axios({
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
        const userId = r.data.user.id
        return { msg: 'ok', data: userId }
      } else if (r.status >= 500) {
        console.log(r.data)
        throw Error('Auth Service Error')
      } else if (r.status >= 400 && r.status < 500) {
        return { msg: 'error', data: 'Authentication credentials wrong' }
      }
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}

async function login (email, password) {
  return axios({
    method: 'POST',
    url: faUrl + 'login',
    headers: headers,
    data: { loginId: email, password: password, applicationId: applicationId }
  })
    .then(r => {
      if (r.status >= 200 && r.status < 300) {
        const userId = r.data.user.id
        return { msg: 'ok', data: userId }
      } else if (r.status >= 500) {
        console.log(r.data)
        throw Error('Auth Service Error')
      } else if (r.status >= 400 && r.status < 500) {
        return { msg: 'error', data: 'Authentication credentials wrong' }
      }
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}

function authResponseUtil () {

}

const auth = {
  register: register,
  login: login
}

export default auth
