import Item, { GearDetail, GearPrices } from '../models/item.mjs'

const AddGearComponent = {
    view: () => {
        return m('article',
            m('fieldset',
                m('legend', 'Add Gear'),

                m('label', { for: 'gear-name' }, 'name'),
                m('input', { name: 'gear-name', value: GearDetail.name, oninput: addNameOrUrl('name') }),
                GearDetail.error && m('span.red', 'Gear Item requires a name'),

                m('label', 'gear price'),
                Object.keys(GearPrices).map(key => {
                    return m('div',
                        m('label', { for: 'gear-price' }, key),
                        m('input', {
                            name: 'gear-price', type: 'checkbox', onclick: check(key), checked: isSelected(key)
                        })
                    )
                }),

                m('label', { for: 'gear-url' }, 'url'),
                m('input', { name: 'gear-url', value: GearDetail.url, oninput: addNameOrUrl('url') }),

                m('button', { onclick: add }, 'add')
            )
        )
    }
}


/* 
* Add the GearDetail to Item 
* GearDetail price, url optional 
*/
const add = e => {
    if (GearDetail.name) {
        // Push a copy of GearDetail into Item
        Item.gear.push({ ...GearDetail })
        GearDetail.reset()
    } else {
        GearDetail.error = true 
    }
}

const addNameOrUrl = attr => (e) => {
    if (attr === 'name') {
        GearDetail.error = false
    }
    GearDetail[`${attr}`] = e.target.value
}

const isSelected = (key) => {
    return GearDetail.price === key
}

const check = price => (e) => {
    const checkboxes = document.getElementsByName('gear-price')
    GearDetail.price = price
}

export default AddGearComponent