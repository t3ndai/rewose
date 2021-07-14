import { formatRelative } from 'https://cdn.skypack.dev/date-fns'
import Posts from '../models/posts.mjs'
import AddPostToCollectionComponent from '../components/addPostToCollectionComponent.mjs'

const DisplayPostPage = {
    oninit: function(vnode) {
        Posts.loadPost(vnode.attrs.id) 
    },
    view: (vnode) => {
        const post = Posts.current
        let gear 
        if (!R.isEmpty(post)) {
            gear = JSON.parse(post.content.gear)
        }
        return !R.isEmpty(post) && m('article', 
            m(AddPostToCollectionComponent),
            m('p', formatRelative(new Date(post.created_at), new Date())),
            post.tags.map(tag => {
               return m('div', tag)
            }),
            post.content.photos.map(photo => {
               return m('img', {src: photo })
            }),
            m('div', post.content.notes),
            gear.map(gear => {
               return m('article', [
                   m('p', gear.name),
                   m('p', gear.price),
                   m('a', {href: gear.url}, 'Where to Buy')
               ])
            })
        )
    }
}

export default DisplayPostPage