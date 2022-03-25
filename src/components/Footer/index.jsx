import './styles.css';
import Logo from '../../assets/images/logo-branca.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';

const Footer = () => {
    const { dispatch } = useContext(ModalContext);
    const { pathname } = useLocation();
    return(
        <footer style={function(){if(pathname === '/cadastro' || pathname === '/login'){ return { display: 'none' }; }}()}>
            <ol>
            <Link to = "/userterms"> <li> Termos de uso </li> </Link>
                <li>Denunciar abuso</li>
                <li onClick={()=>dispatch({
                    type: "OPEN",
                    modal: {
                        kind: "FORM",
                        closeButton: true,
                        header: <h1>Avalie a plataforma</h1>,
                        body: 
                            <form onSubmit={e=>e.preventDefault()}>
                                <input type="text" />
                                <input type="text" />
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </form>,
                        footer: <button>Enviar</button>,
                    }
                })}>Avaliar Plataforma</li>
            </ol>
            <small>Todos os direitos reservados.</small>
            <div>
                <img src={Logo} alt="Logo do rodapé" />
            </div>
        </footer>
    );
}

export default Footer;  