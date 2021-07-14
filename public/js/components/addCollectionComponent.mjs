import Collections from "../models/collections.mjs"

const collection = {
    name: '',
    pvtPolicy: true,
    error: '',
    reset: function() {
        this.name = ''
        this.pvtPolicy = true,
        this.error = ''
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
    displayNewCollectionForm = false 
    validate()
    if (collection.error) {
        return true 
    }
    Collections.addCollection(collection.name, collection.pvtPolicy)
    collection.reset()
}

const toggleNewCollectionForm = (e) => {
    displayNewCollectionForm = !displayNewCollectionForm
}

export default AddCollectionComponent