// SetupsItems
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Storage } from '@google-cloud/storage'
import path from 'path'

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
  endpoint: OBJECT_STORE
})

export function newItem (req, res) {
  res.render('items/create_item')
}

export function createItem (req, res) {
  // Need to save attached filename to fetch the resource later from s3

  const data = req.body.content
  console.log(data)
  res.send('Congrats you posted something new!!')
}

export async function uploadAttachment (req, res) {
  const filename = req.body.filename
  const file = req.body.file

  if (filename && file) {
    const command = new PutObjectCommand({ Key: filename, Bucket: 'rewose', Body: file })

    clientS3.send(command)
      .then(_ => {
        res
          .status(201)
          .json({ filename: filename, url: `${OBJECT_STORE}/${BUCKET}/${filename}` })
      })
      .catch(err => console.log(err))
  }
}
