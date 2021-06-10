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
  return filePath
}

/*
* Add single post to db
* @param {string} userID
* @param {string} content as jsonString
* @param {Array}{string} tags
* @returns {Promise} result
*/
function addPost (userId, content, tags) {
  const query = fs.readFileSync(sqlFilePath('add_post.sql')).toString()
  return db.query(query, [content, userId, tags])
}

/*
* Fetch a single post from the db
* @param {string} postId
* @returns {Promise} content result
*/
function getPost (postId) {
  const query = fs.readFileSync(sqlFilePath('get_post.sql')).toString()
  return db.query(query, [postId])
}

/*
* Update Post creating hierachy
* @param {string} content
* @param {string} path
* @param {string} userId
* @returns {Promise} result
*/
function updatePost (content, path, userId) {
  const query = fs.readFileSync(sqlFilePath('update_post.sql')).toString()
  return db.query(query, [content, path, userId])
}

/*
* Get post children i.e updates
* @param {string} postId
* @returns {Promise} result
*/
function getPostChildren (postId) {
  const query = fs.readFileSync(sqlFilePath('get_child_posts.sql')).toString()
  return db.query(query, [postId])
}

/*
* Get the number of updates
* @param {string} postId
* @returns {Promise} result
*/
function getNumberOfUpdates (postId) {
  const query = fs.readFileSync(sqlFilePath('count_updates.sql')).toString()
  return db.query(query, [postId])
}

const posts = {
  add: addPost,
  get: getPost,
  update: updatePost,
  children: getPostChildren,
  updateCount: getNumberOfUpdates
}

export { posts }
