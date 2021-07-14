import user from '/js/models/user.mjs'
import LoginState from "./loginState.mjs"

const NavBarComponent = {
    view: (vnode) => {
        return m('nav.navBar',
            m(LoginState, { user: user }),
            m('div.links',
                m(m.route.Link, { href: '/' }, 'Home'),
                m(m.route.Link, { href: '/collections' }, 'Collections'),
            )
        )
    }
}

export default NavBarComponent