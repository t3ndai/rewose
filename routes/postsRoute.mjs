import express from 'express'
import db from '../services/db.mjs'
import { posts } from '../services/sql.mjs'


const postsRoute = express.Router()

/* 
* Get latest posts 
*/
async function getLatestPosts(req, res) {

    try {
       const results = await posts.latest()
       const { rows } = results 
       res
          .status(200)
          .json({'data': rows })
  
    } catch (err) {
      console.log(err.stack)
      res
        .status(500)
        .json({'msg': 'not able to get posts'})
    }
}

/*
* Get item by id
*/
async function getItem(req, res) {
  const postId = req.params.postId

  try {
    const result = await posts.get(postId)
    const updatesResults = await posts.updateCount(postId)

    const { rows: [{ content, user_id: authorId, tags, created_at }] } = result
    const { rows: [{ count: numUpdates }] } = updatesResults

    console.log(content)

    res
      .status(200)
      .json({'data': { content, tags, authorId, postId, numUpdates, created_at } })
  } catch (err) {
    console.log(err.stack)
    res
      .status(404)
      .json({'msg': 'Not found'})
  }
}


postsRoute.get('/', getLatestPosts)
postsRoute.get('/:postId', getItem)

export default postsRoute