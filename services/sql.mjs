import { resolve } from 'path'
import fs from 'fs'
import db from './db.mjs'

/*
* Loads sql query from file
* @param {string} file name
* @returns {string} file path
*/
function sqlFilePath(file) {
  const filePath = resolve('..', 'sql', file)
  return filePath
}

// Posts

/*
* Add single post to db
* @param {string} userID
* @param {string} content as jsonString
* @param {Array}{string} tags
* @returns {Promise} result
*/
function addPost(userId, content, tags) {
  const query = fs.readFileSync(sqlFilePath('add_post.sql')).toString()
  return db.query(query, [content, userId, tags])
}

/*
* Fetch a single post from the db
* @param {string} postId
* @returns {Promise} content result
*/
function getPost(postId) {
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
function updatePost(content, path, userId) {
  const query = fs.readFileSync(sqlFilePath('update_post.sql')).toString()
  return db.query(query, [content, path, userId])
}

/*
* Get post children i.e updates
* @param {string} postId
* @returns {Promise} result
*/
function getPostChildren(postId) {
  const query = fs.readFileSync(sqlFilePath('get_child_posts.sql')).toString()
  return db.query(query, [postId])
}

/*
* Get the number of updates
* @param {string} postId
* @returns {Promise} result
*/
function getNumberOfUpdates(postId) {
  const query = fs.readFileSync(sqlFilePath('count_updates.sql')).toString()
  return db.query(query, [postId])
}

/* 
* Get latest posts
* @returns {Promise} result
*/
function getLatestPosts() {
  const query = fs.readFileSync(sqlFilePath('get_latest_posts.sql')).toString()
  return db.query(query)
}

/* 
* Save Post to Collection 
* @param {string} postId 
* @param {string} collectionId 
*/
function savePostToCollection(postId, collectionId) {
  const query = fs.readFileSync(sqlFilePath('add_post_collection.sql')).toString()
  return db.query(query, [postId, collectionId])
}

const posts = {
  add: addPost,
  get: getPost,
  update: updatePost,
  children: getPostChildren,
  updateCount: getNumberOfUpdates,
  latest: getLatestPosts,
  savePostToCollection: savePostToCollection
}

// Collections

/*
* Add a collection
* @param {string} userId
* @param {string} name
* @param {bool} pvtPolicy - indicates whether collection is private
*/
function addCollection(userId, name, pvtPolicy) {
  const query = fs.readFileSync(sqlFilePath('add_collection.sql')).toString()
  return db.query(query, [userId, name, pvtPolicy])
}

/*
* Get a user's collections
* @param {string} userId
*/
function getCollections(userId) {
  const query = fs.readFileSync(sqlFilePath('get_user_collections.sql')).toString()
  return db.query(query, [userId])
}

const collections = {
  add: addCollection,
  get: getCollections
}

// Users

/*
* Save User
* @param {string} email 
* @param {string} hashedpassword 
* @param {string} initial generated username 
*/
function addUser(email, password, username) {
  const query = fs.readFileSync(sqlFilePath('add_user.sql')).toString()
  return db.query(query, [email, password, username])
}

/*
* Get User
* @param {string} email 
* @param {string} password 
*/
function getUser(email, password) {
  const query = fs.readFileSync(sqlFilePath('get_user.sql')).toString()
  return db.query(query, [email, password])
}



const users = {
  add: addUser,
  get: getUser
}


// Collections with or Without Posts

/* 
* Get User's collections with or without posts 
* @param {string} userId
* @param {string} postId 
*/
function getCollectionWAPosts(userId, postId) {
  const query = fs.readFileSync(sqlFilePath('get_collections_WA_post.sql')).toString()
  return db.query(query, [userId, postId])
}

const postCollections = {
  get: getCollectionWAPosts
}

export {
  posts,
  collections,
  users,
  postCollections
}
