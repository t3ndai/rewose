import Collections from "../models/collections.mjs"
import Posts from '../models/posts.mjs'

let showCollections = false

let selectedCollections = []

const AddPostToCollectionComponent = {
    view: () => {
        return m('article',
            m('button', { onclick: toggleCollections }, 'Save Post to Collection'),
            showCollections && m('article',
                m('fieldset',
                    m('legend', 'Save Post to Collection'),
                    Collections.list.map(collection => {
                        return m('div',
                            m('input', {
                                type: 'checkbox',
                                checked: R.includes(collection.id, selectedCollections),
                                onclick: selectCollection(collection.id)
                            }),
                            m('div', collection.name),
                            collection.pvtPolicy ?
                                m('div', 'private')
                                :
                                m('div', 'public')
                        )
                    }),
                    m('button', {onclick: save}, 'Save'),
                    m('button', {onclick: cancelSave}, 'Cancel')
                )
            )
        )
    }
}

const selectCollection = collectionId => e => {
    e.preventDefault()
    // remove if already selected 
    if (R.includes(collectionId, selectedCollections)) {
        selectedCollections = R.without([collectionId], selectedCollections)
    } else {
        selectedCollections = R.append(collectionId, selectedCollections)
    }
}


const save = (e) => {
    Posts.savePostToCollection(selectedCollections)
    selectedCollections = []
    showCollections = false 
}

const toggleCollections = (e) => {
    showCollections = !showCollections
}

const cancelSave = (e) => {
    showCollections = false 
    selectedCollections = []
}

export default AddPostToCollectionComponent