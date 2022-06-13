import classNames from "classnames";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import routes from "../../routes";
import Footer from "../Footer";
import Header from "../Header";
import LateralHeader from "../LateralHeader";
import Modal from "../Modal";
import './styles.css';

const DefaultLayout = ({ children }) => {
    const { pathname } = useLocation();
    const [cookies] = useCookies();
    return(
        <div className={classNames({
            "default-layout": cookies.screen !== 'P',
            "lateral-layout": cookies.screen === 'P',
        })}>
            {
                pathname === '/login' || pathname === '/cadastro' ?
                <main className="sign-main">
                    { children }
                </main>
                :
                <>
                    {
                        cookies.screen === 'P' ? <LateralHeader/> : <Header/>
                    }
                        <main className={classNames(
                            {
                                'mileto-main': routes.find(item=>item.path === pathname && item.fullScreen),
                                "home-main" : pathname === '/',
                                "default-main": pathname !== '/' && !(routes.find(item=>item.path === pathname && item.fullScreen))
                            }
                        )}>
                            { children }
                        </main>
                        {cookies.screen !== 'P' && <Footer/>}
                </>
            }
            <Modal/>
            
        </div>
    );
}

export default DefaultLayout;