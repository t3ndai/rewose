import createItemBtn from '../components/createItemBtn.mjs'
import DisplayPostSnippetComponent from '../components/displayPostSnippetComponent.mjs'
import Posts from '../models/posts.mjs'


const IndexPage = {
    view() {
        return m('article.index', [
            m('p', 'Welcome to Remote Work Setups'),
            m(createItemBtn),
            m('article.postsSnippet',
                Posts.list.map(post => {
                    return m(DisplayPostSnippetComponent, { post: post })
                })
            )
        ])
    }
}

export default IndexPage