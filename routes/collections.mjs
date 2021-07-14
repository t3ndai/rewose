import express from 'express'

import { collections as db } from '../services/sql.mjs'

const collections = express.Router()

/*
* Get collections
*/
async function getCollections (req, res) {
  const userId = req.signedCookies.user_id

  try {
    const results = await db.get(userId)
    const { rows: collectionsArray } = results
    res
      .status(200)
      .json(collectionsArray)
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ msg: "can't get collections" })
  }
}

/*
* Add Collection
*/
async function addCollection (req, res) {
  const collectionName = req.body.name
  const pvtPolicy = req.body.pvtPolicy
  const userId = req.signedCookies.user_id

  if (collectionName) {
    try {
      await db.add(userId, collectionName, pvtPolicy)
      res
        .status(201)
        .json({'msg': 'created new collection'})
    } catch (err) {
      console.log(err)
    }
  } else {
    res
      .status(400)
      .json({ msg: 'please provide a name' })
  }
}


collections.get('/', getCollections)
collections.post('/add', addCollection)

export default collections
