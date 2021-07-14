

const ImagePreviewComponent = {
    view: (vnode) => {
        const { photo } = vnode.attrs
        return m('img.h-auto.w-40', {src: photo})
    }
}

export default ImagePreviewComponent