import LoginForm from "../components/loginForm.mjs";

const LoginPage = {
    view: function(vnode) {
        return m('article', [
            m('h1', vnode.attrs.page),
            m(LoginForm, {page: vnode.attrs.page})
        ])
    }
}

export default LoginPage