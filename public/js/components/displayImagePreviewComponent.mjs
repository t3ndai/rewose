import Item from "../models/item.mjs";

const DisplayImagePreviewComponent = {
    view: () => {
        return m('article',
            Item.attachments.map(url => {
                return m('img.w-20.h5', { src: url })
            })
        )
    }
}

export default DisplayImagePreviewComponent