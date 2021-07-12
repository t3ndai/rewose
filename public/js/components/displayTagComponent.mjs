import Item from "../models/item.mjs";

const DisplayTagComponent = {
    view: () => {
        return m('article',
            m('div', 'Tags'),
            Item.tags.length ?
            m('div',
                Item.tags.map(tag => {
                    return m('div', tag)
                })
            )
            :
            null 
        )
    }
}

export default DisplayTagComponent