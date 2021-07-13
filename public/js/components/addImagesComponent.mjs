import Item from '../models/item.mjs'

let fileInput

const AddImagesComponent = {
    oncreate: () => {
        fileInput = document.getElementById('add-image')
    },
    view: () => {
        return m('article',
            Item.attachments.length < 3 && 
            m('article',
                m('input', {
                    type: 'file',
                    multiple: 'true',
                    name: 'add-image',
                    id: 'add-image',
                    accept: 'image/*',
                    onchange: addFile,
                }),
                m('button', {onclick: uploadImages}, 'Upload Images')
            )
        )
    }
}

const addFile = (e) => {
    const files = fileInput.files

    for (const file of files) {
        Item.attachments.push(file)
    }
}

const uploadImages = (e) => {
    
}

export default AddImagesComponent