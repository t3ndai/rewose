import Item from '../models/item.mjs'

const AddTagCompoent = {
    view: function (vnode) {
        return m('article',
            Item.tags.length < 3 &&
            m('fieldset',
                m('legend', 'Add Tags'),
                m('label', { for: 'add-tag' }),
                m('input', { onkeydown: addTag, name: 'add-tag' })
            )
        )
    }
}

const addTag = (e) => {
    if (event.key === 'Enter') {
        Item.tags.push('#' + e.target.value)
        e.target.value = ''
    }
}

export default AddTagCompoent