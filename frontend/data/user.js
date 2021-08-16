import { makeAutoObservable, runInAction, autorun } from "mobx";
import axios from 'axios'
import dayjs from "dayjs";

const serverUrl = process.env.NEXT_PUBLIC_URL

const createUserStore = () => {
    let id = ''
    let name = 'guest'
    let sessionExpiry = 0
    let error = ''

    const login = async (email, password) => {
        try {
            const res = await axios.post(serverUrl + '/login', {
                email,
                password
            })
            const { data } = res
            runInAction(() => {
                id = data.userId
                name = data.userName
                sessionExpiry = dayjs().add(60, 'day')
            })
        }
        catch (err) {
            if (err.response) {
                if (err.response.status == 500) {
                    runInAction(() => {
                        console.log(error.response.data)
                        error = 'server had an error, try again later'
                    })
                } else {
                    runInAction(() => {
                        console.log(err.response.data)
                        error = 'wrong credentials'
                    })
                }
            } else if (error.request) {
                runInAction(() => {
                    error = 'failed login'
                })
                console.log(err.request)
            } else {
                console.log(err.message)
            }
        }

    }

    return makeAutoObservable({ id, name, sessionExpiry, error, login })
}


let userStore = createUserStore()

if (typeof window !== 'undefined') {
    window.userStore = userStore
}

autorun(() => {
    console.log('error', userStore.error)
})

export default userStore