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
    console.log(collectionsArray)
    res
      .status(200)
      .render('collections/collections', { collectionsArray })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .send("can't get collections")
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
        .render('collections/collections')
    } catch (err) {
      console.log(err)
    }
  } else {
    res
      .status(400)
      .send('please provide a name')
  }
}

/*
* Create Collection View
*/
function createCollection (req, res) {
  res
    .render('collections/create_collection')
}

collections.get('/', getCollections)
collections.get('/create', createCollection)
collections.post('/add', addCollection)

export default collections
