import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Main from "../screens/Main";
import SignUp from "../screens/SignUp";

const routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
        public: true
    },
    {
        path: 'principal',
        component: Main,
        title: 'Início',
        displayMenu: true
    },
    {
        path: '/login',
        component: Login,
        title: 'Login',
        public: true,
        hideHeader: true
    },
    {
        path: '/cadastro',
        component: SignUp,
        title: 'Cadastro',
        public: true,
        hideHeader: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        title: 'Dashboard',
        private: true
    }
];

export default routes;