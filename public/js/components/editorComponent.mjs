import Item from "../models/item.mjs";


let quillEditor

const EditorComponent = {
    oncreate: async () => {
        const { default: Quill } = await import('https://cdn.skypack.dev/quill')

        quillEditor = new Quill('#editor', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline']
                ]
            },
            placeholder: 'Additional notes or comments...',
            theme: 'snow'
        })
        quillEditor.on('text-change', () => {
            Item.notes = quillEditor.getText()
        })
    },
    view: () => {
        return m('article',
            m("div", { id: 'editor' }),
        )
    }
}


export default EditorComponent