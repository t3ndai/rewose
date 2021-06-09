// SetupsItems
import express from 'express'
import multer from 'multer'
import sanitizeHtml from 'sanitize-html'

import auth from '../middleware/auth.mjs'
import { posts } from '../services/sql.mjs'
import { saveFile } from '../services/object_storage.mjs'

/*
 TODO

 - Update item

*/

const items = express.Router()
items.use(auth.sessionValid)

const memoryStorage = multer.memoryStorage()
const upload = multer({ storage: memoryStorage })

/*
* Item creation page
*/
function newItem (req, reply) {
  const formAction = 'items/createItem'
  reply.render('items/create_item', { formAction })
}

/*
* Saves User created post to db
*/
async function createItem (req, reply) {
  const postBody = req.body.content
  const tags = req.body.tags.split(',')
  const userId = req.signedCookies.user_id

  const cleanedData = sanitizeHtml(postBody, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
  })
  const content = JSON.stringify(cleanedData)

  try {
    await posts.add(userId, content, tags)

    reply.redirect('/home')
  } catch (err) {
    console.log(err)
    reply
      .status(500)
      .send('Could not save post')
  }
}

/*
* Handles Attachment upload
 */
function uploadAttachment (req, reply) {
  const filename = req.body.filename
  const file = req.file.buffer

  if (filename && file) {
    saveFile(filename, file)
      .then(url => {
        reply
          .status(201)
          .send({ filename: filename, url: url })
      })
      .catch(err => {
        console.log(err)
        reply
          .status(500)
          .send({ error: 'error saving file' })
      })
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
async function getItem (req, res) {
  const itemId = req.params.itemId
  const userId = req.signedCookies.user_id

  try {
    const result = await posts.get(itemId)
    const { rows: [{ content, user_id, tags }] } = result

    const author = userId === user_id

    res
      .status(200)
      .render('items/view_item', { content, tags, author, itemId })
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
async function updateItem (req, res) {
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
async function getItemUpdateEdit (req, res) {
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

// Items
items.get('/newItem', newItem)
items.get('/:itemId', getItem)
items.get('/:itemId/update', getItemUpdateEdit)
items.post('/createItem', createItem)
items.post('/attachment', upload.single('file'), uploadAttachment)
items.post('/:itemId/update', updateItem)

export default items
