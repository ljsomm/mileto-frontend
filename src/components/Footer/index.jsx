import './styles.css';
import Logo from '../../assets/images/logo-branca.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation();
    return(
        <footer style={function(){if(pathname === '/cadastro' || pathname === '/login'){ return { display: 'none' }; }}()}>
            <ol>
            <Link to = "/userterms"> <li> Termos de uso </li> </Link>
                <li>Denunciar abuso</li>
                <li>Avaliar Plataforma</li>
            </ol>
            <small>Todos os direitos reservados.</small>
            <div>
                <img src={Logo} alt="Logo do rodapé" />
            </div>
        </footer>
    );
}

export default Footer;