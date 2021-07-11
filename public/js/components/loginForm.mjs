import user from '/js/models/user.mjs'

const email = {
    label: 'email',
    value: '',
    error: ''
}


const password = {
    label: 'password',
    value: '',
    error: '',
    min: 8
}

const input = (attrs) => 
    m('fieldset.flex',
        m('label.calisto.f4.w-20', attrs.label),
        m('input.br2.w-third', {
            value: attrs.value,
            type: attrs.label,
            onchange: e => {
                attrs.value = e.target.value
                attrs.error && validate()
            }
        }),
        attrs.error && m('span.red', attrs.error)
    )

const LoginForm = {
    view: function(vnode) {
        return m('form.loginForm', {id: 'loginForm', onsubmit: onsubmit(vnode.attrs.page)},
           input(email), 
           input(password),
           m('button.br4', 'submit')
        )
    }
}

const validate = () => {
    email.error = !email.value.match(/.+@.+\..+/) && "Please enter a valid email"

    password.error = password.value.length < 8 
     && "Please enter a password greater than 8 characters"
}

const onsubmit = page => (e) => {
    e.preventDefault()
    validate()
    if (email.error || password.error) {
       return true
    }
    const form = document.getElementById('loginForm')
    sendData(page)
} 

function sendData(page) {
    user.login(page, email.value, password.value)
}



export default LoginForm