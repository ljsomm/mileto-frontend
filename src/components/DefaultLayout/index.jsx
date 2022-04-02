import classNames from "classnames";
import { useLocation } from "react-router-dom";
import routes from "../../routes";
import Footer from "../Footer";
import Header from "../Header";
import Modal from "../Modal";
import './styles.css';

const DefaultLayout = ({ children }) => {
    const { pathname } = useLocation();
    const location = useLocation();
    return(
        <div className="default-layout">
            {
                pathname === '/login' || pathname === '/cadastro' ?
                <main className="sign-main">
                    { children }
                </main>
                :
                <>
                    <Header/>
                        <main className={classNames(
                            {
                                'mileto-main': routes.find(item=>item.path === pathname && item.fullScreen),
                                "home-main" : pathname === '/',
                                "default-main": pathname !== '/' && !(routes.find(item=>item.path === pathname && item.fullScreen))
                            }
                        )}>
                            { children }
                        </main>
                    <Footer/>
                </>
            }
            <Modal/>
            
        </div>
    );
}

export default DefaultLayout;