import Login from "./pages/Login"

var routes = [
    {
        path: '/login',
        name: 'Login',
        layout: '/auth',
        menu : true,
        component: Login 
    }
]

export default routes