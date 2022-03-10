import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import './styles.css';

const DefaultLayout = ({ children }) => {
    const { pathname } = useLocation();
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
                        <main className={pathname === '/' ? "home-main" : "default-main"}>
                            { children }
                        </main>
                    <Footer/>
                </>
            }
            
        </div>
    );
}

export default DefaultLayout;