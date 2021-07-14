

const Posts = {
    origin: function() {
        return window.location.origin
    },
    list: [],
    loadList: () => {
        m.request({
            method: 'GET',
            url: Posts.origin() + '/posts/'
        })
        .then(res => {
            console.log(res.data)
            Posts.list = res.data 
        })
        .catch(err => {
            console.log(err)
        })
    },
    current: {},
    loadPost: (postId) => {
        m.request({
            method: 'GET',
            url: Posts.origin() + '/posts/' + postId,
            withCredentials: true 
        })
        .then(res => {
            Posts.current = res.data 
        })
        .catch(err => {
            console.log(err)
        })
    },
    savePostToCollection: (collections) => {
        const formBody = {
            postId: Posts.current.postId, 
            collections
        }
        m.request({
            method: 'POST',
            url: Posts.origin() + '/items/postCollection',
            body: formBody
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default Posts 