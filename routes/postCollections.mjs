import express from 'express'
import { postCollections } from '../services/sql.mjs'
import auth from '../middleware/auth.mjs'

const postCollectionsRouter = express.Router()
postCollectionsRouter.use(auth.sessionValid)

/* 
* Respond with User's collections and posts saved 
  to the collection 
*/
async function getCollectionsWAPosts(req, res) {
    const userId = req.signedCookies.user_id 
    const postId = req.params.postId 

    try {
        const results = await postCollections.get(userId, postId)
        const {rows } = results 

        res
          .status(200)
          .json({data: rows })
    }
    catch (err) {
        console.log(err)
        res
          .status(500)
          .json({'msg': "we can't return any results "})
    }
}

postCollectionsRouter.get('/:postId', getCollectionsWAPosts)

export default postCollectionsRouter
