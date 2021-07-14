import Collections from "../models/collections.mjs"
import AddCollectionComponent from '../components/addCollectionComponent.mjs'


const DisplayCollectionsPage = {
    view: () => {
        console.log(Collections.list)
        return m('article',
            m(AddCollectionComponent),
            Collections.list.map(collection => {
               return m('div', collection.name)
            }),
        )
    }
}



export default DisplayCollectionsPage