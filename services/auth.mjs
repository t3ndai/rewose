import { pbkdf2Sync } from 'crypto'
import { users } from '../services/sql.mjs'
import generateUsername from '../services/usernames.mjs'

const SALT = '000rewose01k'

/*
* TODO
* - deal with duplicate email
* - deal with user not found
* - deal with duplicate username 
*/

async function register (email, password) {
  const hashedPasswordBuffer = pbkdf2Sync(password, SALT, 100000, 64, 'sha512')
  const hashedPassword = hashedPasswordBuffer.toString('hex')
  const username  = generateUsername()
  try {
    const results = await users.add(email, hashedPassword, username)
    const { rows: [{ id: userId, user_name: userName }] } = results
    return { msg: 'ok', data: { id: userId, userName } }
  } catch (err) {
    console.log(err)
    return { msg: 'error', data: 'Authentication credentials wrong' }
  }
}

async function login (email, password) {
  const hashedPasswordBuffer = pbkdf2Sync(password, SALT, 100000, 64, 'sha512')
  const hashedPassword = hashedPasswordBuffer.toString('hex')
  try {
    const results = await users.get(email, hashedPassword)
    console.log(results)
    const { rows: [{ id: userId, user_name: userName }] } = results
    return { msg: 'ok', data: { id: userId, userName } }
  } catch (err) {
    console.log(err)
    return { msg: 'error', data: 'Authentication credentials wrong' }
  }
}

const auth = {
  register: register,
  login: login
}

export default auth
