import ImagePreviewComponent from "./imagePreviewComponent.mjs"

const DisplayPostSnippetComponent = {
    view: (vnode) => {
        const { post } = vnode.attrs
        const previewPhoto = post.content.photos[0]
        return m('article.postSnippetSingle',
            previewPhoto && m(ImagePreviewComponent, { photo: previewPhoto }),
            m(m.route.Link, {href: '/posts/'+ post.id },'View Full Post')
        )
    }
}

export default DisplayPostSnippetComponent