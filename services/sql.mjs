import { resolve } from 'path'
import fs from 'fs'
import db from './db.mjs'

/*
* Loads sql query from file
* @param {string} file name
* @returns {string} file path
*/
function sqlFilePath (file) {
  const filePath = resolve('..', 'sql', file)
  console.log(filePath)
  return filePath
}

/*
* Add single post to db
* @param (string) userID
* @param (string) content as jsonString
* @returns {Promise}
*/
function addPost (userId, content) {
  const query = fs.readFileSync(sqlFilePath('add_post.sql')).toString()
  console.log(query)
  return db.query(query, [content, userId])
}

const posts = {
  add: addPost
}

export { posts }
