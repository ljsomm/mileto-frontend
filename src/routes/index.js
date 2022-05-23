import Course from "../screens/Course";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Main from "../screens/Main";
import MyCourses from "../screens/MyCourses";
import NotFound from "../screens/NotFound";
import Settings from "../screens/Settings";
import SignUp from "../screens/SignUp";
import Terms from "../screens/UserTerms";
import Watch from "../screens/Watch";

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
        path: '/termos-de-uso',
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
        path: '/curso',
        title: 'Curso',
        component: Course,
        fullScreen: true
    },
    {
        path: '/watch/:id',
        title: 'Assistir Curso',
        component: Watch,
        private: true,
    },
    {
        path: '/meus-cursos',
        component: MyCourses,
        private: true,
        title: 'Meus cursos'
    },
    {
        path: '/configuracoes',
        private: true,
        component: Settings,
        title: "Configurações"
    },
    {
        path: '*',
        component: NotFound,
        title: 'Página não encontrada'
    },
];

export default routes;