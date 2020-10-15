import Home from "./pages/Home"
import Login from "./pages/Login"

var routes = [
    {
        path: '/login',
        name: 'Login',
        layout: '/auth',
        menu : true,
        component: Login 
    },
    {
        path: '/home',
        name: 'Home',
        layout: '/admin',
        menu : true,
        component: Home 
    }
]

export default routes