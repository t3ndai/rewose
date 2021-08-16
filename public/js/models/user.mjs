//import dayjs from 'https://cdn.skypack.dev/dayjs';

const storage = window.localStorage
const userName = storage.getItem('name') ?? 'guest'
const userId = storage.getItem('userId') ?? null 

var user = {
    name: userName,
    id: userId, 
    sessionExpiry: '',
    origin: function() {
        return window.location.origin 
    },
    login: (page, email, password) => {
        const formBody = {
            'email': email, 
            'password': password 
        }
    
        m.request({
            method: "POST",
            url: `${user.origin()}/${page.toLowerCase()}`,
            body: formBody,
            withCredentials: true,
        }).then(data => {
           user.name = data.userName 
           user.id = data.userId 
           storage.setItem('name', data.userName)
           storage.setItem('userId', data.userId)
           user.sessionExpiry = dayjs().add(60, 'day')
           // for now set to index page 
           m.route.set('/')   
        })
        .catch(err => {
            console.log(err)
        })
    },
    logout: () => {
        storage.setItem('name', 'guest')
        storage.setItem('userId', null)
        user.name = 'guest'
    }
}

export default user 