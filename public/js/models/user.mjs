//import dayjs from 'https://cdn.skypack.dev/dayjs';

var user = {
    name: 'guest',
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
           user.name = data.user.name 
           user.sessionExpiry = dayjs().add(60, 'day')
           // for now set to index page 
           m.route.set('/')   
        })
    },
    logout: () => {
        user.name = 'guest'
    }
}

export default user 