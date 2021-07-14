// SetupsItems
import express from 'express'
import multer from 'multer'
import sanitizeHtml from 'sanitize-html'
import { Worker, isMainThread } from 'worker_threads'

import auth from '../middleware/auth.mjs'
import { posts } from '../services/sql.mjs'
import { saveFile } from '../services/object_storage.mjs'

/*
 TODO
*/

const items = express.Router()
items.use(auth.sessionValid)

const memoryStorage = multer.memoryStorage()
const upload = multer({ storage: memoryStorage })

/*
* Saves User created post to db
*/
async function createItem(req, res) {
  const notes = sanitizeHtml(req.body.notes)
  const tags = req.body.tags.split(',')
  const photos = req.files
  const gear = sanitizeHtml(req.body.gear)
  const { id: userId } = req.signedCookies.user_id

  try {
    const imageResults = photos.map(async (file) => {
      const filename = file.originalname + '-' + Date.now()
      try {
        const url = await saveFile(filename, file.buffer)
        return url
      } catch (err) {
        console.log(err)
        return err
      }
    })
    const imageUrls = await Promise.all(imageResults)
    console.log(imageUrls)
    const content = JSON.stringify({
      'notes': notes,
      'photos': imageUrls,
      'gear': gear
    })
    await posts.add(userId, content, tags)

    res
      .status(200)
      .json({ msg: 'created post' })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ msg: 'Could not save post' })
  }
}

/*
* Handles Attachment upload
 */
async function uploadAttachment(req, reply) {
  const filename = req.body.filename
  const file = req.file.buffer
  const fileType = req.file.mimetype

  if (filename && file) {
    try {
      const url = await saveFile(filename, file)

      if (url) {
        // for images run worker to resize images
        if (fileType === 'image/jpeg' || fileType === 'image/png') {
          if (isMainThread) {
            const workerUrl = new URL('../workers/image_resize.mjs', import.meta.url)
            const worker = new Worker(workerUrl, { workerData: { filename: filename, fileUrl: url } })
            worker.on('error', (err) => {
              console.log(err)
              throw new Error('error encountered')
            })
          }
        }
        reply
          .status(201)
          .send({ filename: filename, url: url })
      } else {
        throw Error('error saving file')
      }
    } catch (err) {
      console.log(err)
      reply
        .status(500)
        .send({ error: 'error saving file' })
    }
  } else {
    // TODO: Error if no attached file
    reply
      .status(400)
      .send({ error: 'no attached file' })
  }
}

/*
* Get item by id
*/
async function getItem(req, res) {
  const itemId = req.params.itemId
  const userId = req.signedCookies.user_id

  try {
    const result = await posts.get(itemId)
    const updatesResults = await posts.updateCount(itemId)

    const { rows: [{ content, user_id: authorId, tags }] } = result
    const { rows: [{ count: numUpdates }] } = updatesResults

    // check to see whether user can update post
    const author = userId === authorId

    res
      .status(200)
      .render('items/view_item', { content, tags, author, itemId, numUpdates })
  } catch (err) {
    console.log(err)
    res
      .status(404)
      .send('Not found')
  }
}

/*
* Update item
*/
async function updateItem(req, res) {
  const itemId = req.params.itemId
  const userId = req.signedCookies.user_id
  const dirtyContent = req.body.content

  const cleanContent = sanitizeHtml(dirtyContent, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
  })
  const content = JSON.stringify(cleanContent)

  try {
    const pathResult = await posts.get(itemId)
    const { rows: [{ path }] } = pathResult
    await posts.update(content, userId, path)
    res
      .status(201)
      .redirect('/home')
  } catch (err) {
    console.log(err)
    res
      .status(404)
      .send('Not found')
  }
}

/*
* Item update Edit
*/
async function getItemUpdateEdit(req, res) {
  const itemId = req.params.itemId
  const formAction = `items/${itemId}/update`

  try {
    const result = await posts.get(itemId)
    const { rows: [{ content }] } = result
    res
      .status(200)
      .render('items/create_item.html', { content, formAction })
  } catch (err) {
    console.log(err)
    res
      .status(404)
      .send('Not found')
  }
}

/*
* Get children of posts i.e updates
*/
async function getPostUpdates(req, res) {
  const itemId = req.params.itemId

  try {
    const result = await posts.children(itemId)
    const { rows: postResults } = result
    res
      .status(200)
      .render('items/item_history', { postResults })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .send('not able to fetch children')
  }
}

/* 
* Save Post to Collection 
*/
async function savePostToCollection(req, res) {
  const userId = req.signedCookies.user_id
  const postId = req.body.postId
  const collections = req.body.collections

  try {
    await collections.map(async (collection) => {
      try { 
        await posts.savePostToCollection(postId, collection)
      } 
      catch (err) {
        throw err
      }
    })
    res
      .status(201)
      .json({ msg: 'saved post to collection' })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ msg: 'could not save post to collection' })
  }
}


// Items
items.get('/:itemId', getItem)
items.get('/:itemId/update', getItemUpdateEdit)
items.get('/:itemId/updates', getPostUpdates)

items.post('/createItem', upload.array('photos', 3), createItem)
items.post('/attachment', upload.array('photos', 3), uploadAttachment)
items.post('/:itemId/update', updateItem)
items.post('/postCollection', savePostToCollection)

export default items
