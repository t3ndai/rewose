import Posts from '../models/posts.mjs'

let showCollections = false

let collectionsMap = new Map()

/* 
* Get user's collections and posts saved to those collections
*/
function getCollectionWAPosts(postId) {
    const originUrl = window.location.origin
    m.request({
        method: 'GET',
        url: originUrl + '/postCollections/' + postId
    })
        .then(res => {
            Object.values(res.data).forEach(collection => {
                collectionsMap.set(collection.id, { ...collection })
            })
        })
        .catch(err => console.log(err))
}

function saveCollectionWAPosts(postId) {
    const originUrl = window.location.origin
}

const AddPostToCollectionComponent = {
    oninit: (vnode) => {
        const { postId } = vnode.attrs
        getCollectionWAPosts(postId)
    },
    view: () => {
        return m('article',
            m('button', { onclick: toggleCollections }, 'Save Post to Collection'),
            showCollections && m('article',
                m('fieldset',
                    m('legend', 'Save Post to Collection'),
                    Array.from(collectionsMap.keys()).map(collectionId => {
                        const collection = collectionsMap.get(collectionId)
                        return m('div',
                            m('input', {
                                type: 'checkbox',
                                checked: collection.has_post,
                                onclick: selectCollection(collectionId)
                            }),
                            m('div', collection.name),
                            collection.pvtPolicy ?
                                m('div', 'private')
                                :
                                m('div', 'public')
                        )
                    }),
                    m('button', { onclick: save }, 'Save'),
                    m('button', { onclick: cancelSave }, 'Cancel')
                )
            )
        )
    }
}

const selectCollection = collectionId => e => {
    e.preventDefault()
    // remove if already selected 
    let collection = collectionsMap.get(collectionId)
    collectionsMap.set(collectionId, {...collection, has_post: !collection.has_post})
}


const save = (e) => {
    Posts.savePostToCollection(Object.fromEntries(collectionsMap))
    showCollections = false
}

const toggleCollections = (e) => {
    showCollections = !showCollections
}

const cancelSave = (e) => {
    showCollections = false
}

export default AddPostToCollectionComponent