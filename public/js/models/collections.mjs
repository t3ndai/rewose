

const Collections = {
    origin: function() {
        return window.location.origin
    },
    name: '',
    list: [],
    getUserCollections: () => {
        m.request({
            method: 'GET',
            url: Collections.origin() + '/collections/',
            withCredentials: true
        })
        .then(data => {
            console.log(data)
            Collections.list = data 
        })
        .catch(err => {
            console.log(err)
        })
    },
    addCollection: (name, pvtPolicy) => {
        const form = {
            name, 
            pvtPolicy
        }

        m.request({
            method: 'POST',
            url: Collections.origin() + '/collections/add',
            withCredentials: true,
            body: form 
        })
        .then(data => {
            m.route.set('/collections')
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default Collections 