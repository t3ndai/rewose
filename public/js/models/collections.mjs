

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
            Collections.list = data 
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default Collections 