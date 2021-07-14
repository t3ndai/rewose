//import dayjs from 'https://cdn.skypack.dev/dayjs';

const storage = window.localStorage
const userName = storage.getItem('name') ?? 'guest'
const userId = storage.getItem('userId') ?? null 

var user = {
    name: userName,
    id: userId, 
    sessionExpiry: '',
    login: (page, email, password) => {
        const formBody = {
            'email': email, 
            'password': password 
        }
    
        m.request({
            method: "POST",
            url: `http://localhost:8000/${page.toLowerCase()}`,
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
    },
    logout: () => {
        storage.setItem('name', 'guest')
        storage.setItem('userId', null)
        user.name = 'guest'
    }
}

export default user 