import user from '/js/models/user.mjs'

const LoginState = {
    view: function(vnode) {
         return m("section",[
            m('p', `Hi ${vnode.attrs.user.name}`),
            vnode.attrs.user.name === "guest" ? 
            m("div",
                m("button", 
                    m("a", {href: "#!/login"}, "Login")
                ), 
                m("button", 
                    m("a", {href: "#!/register"}, "Register")
                )
            ) 
            : 
            m("div", 
                m("button", {onclick: user.logout}, "Logout")
            )
         ])
     }
 }

 export default LoginState