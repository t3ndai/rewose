import AddTagCompoent from '../components/addTagComponent.mjs'
import AddGearComponent from '../components/addGearComponent.mjs';
//import * as FilePond from 'https://cdn.skypack.dev/filepond';
import DisplayGearComponent from '../components/displayGearComponent.mjs';
import DisplayTagComponent from '../components/displayTagComponent.mjs';
import AddImagesComponent from '../components/addImagesComponent.mjs';
import DisplayImagePreviewComponent from '../components/displayImagePreviewComponent.mjs';

let pond 
let quillEditor

const CreateItemPage = {
    oncreate: async () => {
        const { default: Quill } = await import('https://cdn.skypack.dev/quill')
        const { default: FilePondPluginImagePreview } = await import('https://cdn.skypack.dev/filepond-plugin-image-preview')
        const { default: FilePondPluginFileValidateSize } = await import('https://cdn.skypack.dev/filepond-plugin-file-validate-size')
        const { default: FilePondPluginImageExifOrientation } = await import('https://cdn.skypack.dev/filepond-plugin-image-exif-orientation')
        /* const { default: FilePond } = await import('https://cdnjs.cloudflare.com/ajax/libs/filepond/4.28.2/filepond.min.js') */


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
        const pondInput = document.getElementById('filepond')
        /* FilePond.registerPlugin(
            FilePondPluginImagePreview,
            FilePondPluginFileValidateSize,
            FilePondPluginImageExifOrientation,
        )
        pond = FilePond.create(pondInput) */
    },
    view: function (vnode) {
        return m("article.grid",
            /* m("input", {
                "id": "filepond",
                "name": "filepond",
                "multiple": true,
                'data-allow-reorder': true,
                'data-max-files': 3,
                'data-max-file-size': '5MB'
            }), */

            m(DisplayImagePreviewComponent),

            m(AddImagesComponent),

            m(DisplayGearComponent),

            m(AddGearComponent),

            m(DisplayTagComponent),

            m(AddTagCompoent),

            m("div", { id: 'editor' }),

            m("input", { "type": "Submit", "value": "Create" })
        )
    }
}


export default CreateItemPage