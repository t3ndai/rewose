import Item from '../models/item.mjs'


const DisplayGearComponent = {
    view: () => {
        return m('article', 
            Item.gear.map(gear => {
                return m('div', 
                    m('div', gear.name),
                    m('div', price),
                    m('a', {href: gear.url}, 'where to buy')
                )
            })
        )
    }
}

export default DisplayGearComponent