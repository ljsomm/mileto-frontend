import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Main from "../screens/Main";
import NotFound from "../screens/NotFound";
import SignUp from "../screens/SignUp";
import Terms from "../screens/UserTerms";
import UserInfo from "../screens/UserInfo";

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
        path: '/userterms',
        component: Terms,
        title: 'Termos de Uso'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        title: 'Dashboard',
        private: true
    },
    {
        path: '*',
        component: NotFound,
        title: 'Página não encontrada'
    },

    {
        path: '/userinfo',
        component: UserInfo,
        title: 'UserInfo',
    }
];

export default routes;