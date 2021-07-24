import Collections from "../models/collections.mjs"

const collection = {
    origin: () => {
        return window.location.origin
    },
    name: '',
    pvtPolicy: true,
    error: '',
    reset: function() {
        this.name = ''
        this.pvtPolicy = true,
        this.error = ''
    },
    addCollection: (name, pvtPolicy) => {
        const form = {
            name, 
            pvtPolicy
        }

        m.request({
            method: 'POST',
            url: collection.origin() + '/collections/add',
            withCredentials: true,
            body: form 
        })
        .then(() => {
            displayNewCollectionForm = false
            collection.reset()   
            Collections.getUserCollections()
        })
        .catch(err => {
            collection.error = 'collection with name already exists'
            console.log(err)
        })
    }
}

let displayNewCollectionForm = false


const AddCollectionComponent = {
    view: () => {
        return m('article', 
        m('button', { onclick: toggleNewCollectionForm }, '+ Create Collection'),
        displayNewCollectionForm && m(AddCollectionForm)
        )
    }
}

const AddCollectionForm  = {
    view: () => {
        return m('fieldset.flex',
            m('legend', 'Create a new collection'),
            m('label.calisto.f4.w-20', 'name'),
            m('input.br2.w-third', {
                value: collection.name,
                onchange: e => {
                    collection.name = e.target.value
                    collection.error && validate()
                }
            }),
            m('label.calisto.f4.w-20', 'private'),
            m('input.br2.w-third', {
                checked: collection.pvtPolicy,
                type: 'checkbox',
                onchange: e => {
                    collection.pvtPolicy = e.target.value
                }
            }),
            collection.error && m('span.red', collection.error),
            m('button', {onclick: create}, 'Create Collection')
        )
    }
}

const validate = () => {
    collection.error = collection.name.length < 2 && 'Enter a name with at least 2 characters'
}

const create = (e) => { 
    validate()
    if (collection.error) {
        return true 
    }
    collection.addCollection(collection.name, collection.pvtPolicy)
}

const toggleNewCollectionForm = (e) => {
    displayNewCollectionForm = !displayNewCollectionForm
}

export default AddCollectionComponent