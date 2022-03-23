import { Link, useLocation, useNavigate } from 'react-router-dom';
import routes from '../../routes';
import LogoHome from '../../assets/images/logo-branca.png';
import LogoDefault from '../../assets/images/logo-azul-escuro.png';
import './styles.css';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Header = () => {

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
    }, [pathname]);
    return(
        <header style={(()=>{if(pathname==='/'){return{backgroundColor: `rgba(55, 74, 79, ${parseFloat(bgColor)/350})`}}else if(pathname==='/login' || pathname==='/cadastro'){return { display: 'none' }}})()} className={pathname === '/' ? "home-header" : "default-header"}>
            <div className="header-put">
                <img src={pathname === '/'? LogoHome : LogoDefault} alt="logo" className="header-logo"/>
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
               <div onClick={()=>{removeCookie('__token');}}>
                   Sair 
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