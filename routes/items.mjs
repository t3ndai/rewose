// SetupsItems
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import express from 'express'
import multer from 'multer'
import sanitizeHtml from 'sanitize-html'

import auth from '../middleware/auth.mjs'
import { posts } from '../services/sql.mjs'

/*
 TODO

 - post item with text
 - post item with 3 images

*/

const items = express.Router()
items.use(auth.sessionValid)

const memoryStorage = multer.memoryStorage()
const upload = multer({ storage: memoryStorage })

const AWS_KEY = 'AKIAWH4VB4E62RWP5IOK'
const AWS_SECRET = '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'
const AWS_REGION = 'eu-central-1'
const OBJECT_STORE = 'http://localhost:8333'
const BUCKET = 'rewose'

// Set up S3 - DO spaces
const clientS3 = new S3Client({
  region: AWS_REGION,
  /* credentials: {
    accessKeyId: AWS_KEY, secretAccessKey: AWS_SECRET
  }, */
  // signatureVersion: 'v4'
  endpoint: OBJECT_STORE,
  forcePathStyle: true
})

function newItem (req, reply) {
  reply.render('items/create_item')
}

/*
* Saves User created post to db
*/
async function createItem (req, reply) {
  const data = req.body.content
  const userId = req.signedCookies.user_id

  const cleanedData = sanitizeHtml(data)
  const content = JSON.stringify(cleanedData)

  try {
    const postID = await posts.add(userId, content)

    console.log('postID', postID)

    reply.send(cleanedData)
  } catch (err) {
    console.log(err)
    reply
      .status(500)
      .send('Could not save post')
  }
}

function uploadAttachment (req, reply) {
  const filename = req.body.filename
  const file = req.file.buffer

  if (filename && file) {
    const command = new PutObjectCommand({ Key: filename, Body: file, Bucket: BUCKET })

    clientS3.send(command)
      .then(_ => {
        reply
          .status(201)
          .send({ filename: filename, url: `${OBJECT_STORE}/${BUCKET}/${filename}` })
      })
      .catch(err => {
        reply
          .status(500)
          .send({ error: 'error saving file' })

        console.log(err)
      })
  } else {
    // TODO: Error if no attached file
    reply
      .status(400)
      .send({ error: 'error' })
  }
}

// Items
items.get('/newItem', newItem)
items.post('/createItem', createItem)
items.post('/attachment', upload.single('file'), uploadAttachment)

export default items
