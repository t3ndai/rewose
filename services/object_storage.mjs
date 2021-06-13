import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

/*
* ToDo
* Resize Images
*/

const OBJECT_STORE = 'http://localhost:8333'
const BUCKET = 'rewose'

const clientS3 = new S3Client({
  region: 'eu-central-1',
  endpoint: OBJECT_STORE,
  forcePathStyle: true
})

/*
* Saves object to object storage
* @param {string} filename
* @param {buffer} file
* @returns {Promise} file url
 */
export async function saveFile (filename, file) {
  const command = new PutObjectCommand({ Key: filename, Body: file, Bucket: BUCKET })

  return clientS3.send(command)
    .then(_ => {
      const url = `${OBJECT_STORE}/${BUCKET}/${filename}`
      return url
    })
    .catch(err => {
      console.log(err)
      return Error('error saving file')
    })
}

export async function getFile (fileUrl) {

}
