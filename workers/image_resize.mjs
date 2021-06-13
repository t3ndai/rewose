import gm from 'gm'
import { saveFile } from '../services/object_storage.mjs'
import { workerData } from 'worker_threads'
import axios from 'axios'

/*
* Background worker to resize image
* @param {string} filename
* @param {buffer} file
*/

const filename = workerData.filename
const fileUrl = workerData.fileUrl
console.log('runninng worker')

axios.get(fileUrl, { responseType: 'stream' }).then((response) => {
  gm(response.data)
    .resize(400, 400)
    .toBuffer((err, buffer) => {
      if (err) {
        throw new Error('Image Resize Error')
      }
      saveFile(filename, buffer)
        .then(_ => {
          console.log(`resized file ${filename}`)
        })
        .catch(err => console.log(err))
    })
})
