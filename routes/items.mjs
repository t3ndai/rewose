// SetupsItems
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import axios from 'axios'

/*
 TODO

 - post item with text
 - post item with 3 images

*/

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
  reply.view('items/create_item')
}

function createItem (req, reply) {
  // Need to save attached filename to fetch the replyource later from s3

  const data = req.body.content
  console.log(data)
  reply.send('Congrats you posted something new!!')
}

async function uploadAttachment (req, reply) {
  const filename = req.body.filename.value
  const file = await req.body.file.toBuffer()

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
  }
}

export default function (app, opts, done) {
  // Items
  app.get('/newItem', newItem)
  app.post('/createItem', createItem)
  app.post('/attachment', uploadAttachment)

  done()
}
