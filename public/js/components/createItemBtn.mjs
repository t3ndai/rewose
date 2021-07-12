
import user from '/js/models/user.mjs'

const createItemBtn = {
    view: () => {
        return m('article', 
          user.name !== 'guest' &&
          m('button', { onclick: openCreateItemPage }, '+ Create Post')
        )
    }
}

function openCreateItemPage() {
  m.route.set('/createItem')
} 

export default createItemBtn