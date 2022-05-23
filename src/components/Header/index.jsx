import { Link, useLocation, useNavigate } from 'react-router-dom';
import routes from '../../routes';
import LogoHome from '../../assets/images/logo-branca.png';
import LogoDefault from '../../assets/images/logo-azul-escuro.png';
import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import UserContext from '../../contexts/UserContext';
import User from '../../services/User';
import classNames from 'classnames';
import UserUtil from '../../utils/UserUtil';

const Header = () => {
    const { state, dispatch } = useContext(UserContext);
    const [ menu, setMenu ] = useState(false);

    function logout(){
        removeCookie('__token');
        dispatch({type: "REMOVE_USER"});
    }

    async function loginVerify(){
        if(cookies.__token){
            try{
                await User.get(cookies.__token, dispatch , true);
            }
            catch(err){
                if(err.response.status === 401){
                    removeCookie('__token');
                    dispatch({ type: "REMOVE_USER" });
                }
            }
        }   
    }

    const navigate = useNavigate();
    const [ cookies, setCookie, removeCookie ] = useCookies();
    const { pathname } = useLocation();
    const [ bgColor, setBgColor ] = useState(0); 
    useEffect(() => {
        if(pathname === '/'){
            window.addEventListener('scroll',  () => {
                setBgColor(window.scrollY);
            })
        }
        setMenu(false);
        loginVerify();
    }, [pathname]);
    return(
        <header style={(()=>{if(pathname==='/'){return{backgroundColor: `rgba(55, 74, 79, ${parseFloat(bgColor)/350})`}}else if(pathname==='/login' || pathname==='/cadastro'){return { display: 'none' }}})()} className={pathname === '/' ? "home-header" : "default-header"}>
            <div className="header-put">
                <Link to ='/'>
                    <img src={pathname === '/'? LogoHome : LogoDefault} alt="logo" className="header-logo"/>
                </Link>
            </div>
           { 
            (()=>{
                if(pathname !== '/') {
                return(
                        <>
                            <nav>
                                <ol>
                                    {
                            
                                        (routes.filter(item=>item.displayMenu)).map((item, key)=>{
                                            return <li key={key}><Link to={item.path}>{item.title}</Link></li>
                                        })
                                    }
                                </ol>
                            </nav>
                            <div>
                                <input placeholder="Pesquise por cursos que goste" type="search" name="header-search" id="header-search" />
                            </div>
                        </>
                    )
                }
            })()
           }  
           {
               cookies.__token?
                state.name &&
                <div className='end-header'>
                    <div onClick={()=>setMenu(!menu)} className={
                        classNames({
                        "header-user-section": true,
                        "header-user-section__hover": !menu,
                        "header-user-section__active": menu
                        })}>
                        <img alt="User" className='user-icon' src={UserUtil.imageSrcFilter(state.Images[0].path)}/>
                        <span>{UserUtil.nameFilter(state.name)}</span>
                    </div>
                        {
                            menu &&
                            <div className={
                        classNames({
                        "header-dropdown-menu": true,
                        "header-dropdown-menu__active": menu
                        })
                        }>
                        <ol>
                            <li onClick={()=>navigate('/configuracoes')}>Configurações</li>
                            <li onClick={()=>navigate('/meus-cursos?page=1')}>Meus Cursos</li>
                            <li onClick={logout}>Sair</li>
                        </ol>
                    </div>
                        }
                    
               </div>
            :
            <div className={`${pathname === '/' ? "home" : "default"}-header-buttons`}>
                <button className="header-button" onClick={()=>{navigate('login')}}>Log in</button>
                <button className="header-button" onClick={()=>{navigate('cadastro')}}>Cadastro</button>
            </div>
           }
            
        </header>
    );
}

export default Header;