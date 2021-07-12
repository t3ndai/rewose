import createItemBtn from '/js/components/createItemBtn.mjs'

const IndexPage = {
    view() {
        return m('article', [
            m('p', 'Welcome to Remote Work Setups'),
            m(createItemBtn)
        ])
    }
}

export default IndexPage