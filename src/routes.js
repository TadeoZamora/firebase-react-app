import Home from "./pages/Home"
import Login from "./pages/Login"
import Panel from "./pages/Panel"

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
    },
    {
        path: '/panel',
        name: 'Panel',
        layout: '/admin',
        menu : true,
        component: Panel 
    }
]

export default routes